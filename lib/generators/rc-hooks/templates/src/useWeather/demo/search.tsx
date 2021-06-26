import React, { useState } from 'react';
import axios from 'axios';
import { Select } from 'antd';
const Option = Select.Option;

function Search() {
    const [city, setCity] = useState();
    const [data, setData] = useState([]);
    const [locationId, setLocationId] = useState();

    function handleChange(value) {
        setCity(value);
        setLocationId(value);
    }
    function handleSearch(value) {
        if (value) {
            axios
                .get(
                    `https://geoapi.qweather.com/v2/city/lookup?location=${value}&key=10818884d7704a70be7ad5b3cc817d25`,
                )
                .then(res => {
                    const { code, location } = res.data;
                    if (code === '200') {
                        setData(location);
                    }
                });
        } else {
            setData([]);
        }
    }

    return (
        <div>
            <Select
                value={city}
                showSearch
                onSearch={handleSearch}
                onChange={handleChange}
                placeholder="请输入城市检索"
                style={{ width: '200px' }}
                showArrow={false}
                filterOption={false}
                notFoundContent={null}
                defaultActiveFirstOption={false}
            >
                {data.map(item => {
                    return <Option key={item.id}>{item.name}</Option>;
                })}
            </Select>
            <div style={{ padding: '10px 0' }}>
                <span style={{ fontWeight: 'bold' }}>查询结果： </span>
                <span>{locationId}</span>
            </div>
        </div>
    );
}

export default Search;
