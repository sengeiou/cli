<template>
    <div class="demo-home">
        <h1 class="demo-home__title">
            <span>@vtx/ember</span>
        </h1>
        <h2 class="demo-home__desc">伏泰前端uni-app组件库</h2>
        <div class="demo-home-nav">
            <div class="demo-home-nav__title">组件</div>
            <div class="demo-home-nav__group">
				<view class="demo-home-nav__block" v-for="item in components" :key="item.key" @click="to(item.path)">
					{{ item.title }}
					<u-icon name="arrow-right" class="demo-home-nav__icon "></u-icon>
				</view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            components: [
                {
                    key: 'text',
                    title: 'Text 文本',
                    path: '/pages/v-text/index',
                },
            ],
        };
    },
    
    methods: {
        to(path) {
            uni.navigateTo({url: path})
        }
    }
};
</script>

<style lang="scss" scoped>
.demo-home {
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    padding: 24px 10px 20px;
    background: #fff;
}

.demo-home__title,
.demo-home__desc {
    padding-left: 16px;
    font-weight: normal;
    line-height: 1;
    user-select: none;
}
.demo-home__title {
    margin: 0 0 16px;
    font-size: 32px;
    span {
        display: inline-block;
        vertical-align: middle;
    }
}
.demo-home__desc {
    margin: 0 0 30px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
}
.demo-home-nav {
    &__title {
        margin: 24px 0 8px 16px;
        color: rgba(69, 90, 100, 0.6);
        font-size: 14px;
    }
}
.demo-home-nav__block {
    position: relative;
    display: flex;
    margin: 0 0 12px;
    padding-left: 20px;
    color: #323233;
    font-weight: 600;
    font-size: 14px;
    line-height: 40px;
    background: #f7f8fa;
    border-radius: 99px;
    transition: background 0.3s;
    .demo-home-nav__icon {
        position: absolute;
        top: 50%;
        right: 16px;
        width: 16px;
        height: 16px;
        margin-top: -8px;
    }
    &:hover {
        background: #eef0f4;
    }
}
</style>
