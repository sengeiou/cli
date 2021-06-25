import trim from '../src/trim';
import assert from 'power-assert';

describe('trim', () => {
    it("trim(' a b  ') === 'a b'", () => {
        assert(trim(' a b  ') === 'a b');
    });

    it('单层级对象去空检查', () => {
        const param = trim({ name: ' test  ' });
        assert(param.name === 'test');
    });

    it('多层级对象去空检查', () => {
        const param = trim({
            level1: { level2: { name: ' test  ' }, name: ' test  ' },
            name: ' test  ',
            visible: false,
        });
        assert(param.visible === false);
        assert(param.name === 'test');
        assert(param.level1.name === 'test');
        assert(param.level1.level2.name === 'test');
    });

    it('trim([1]) === [1]', () => {
        assert.notStrictEqual(trim([1]), [1]);
    });

    it('trim(false) === false', () => {
        assert(trim(false) === false);
    });

    it('trim(null) === null', () => {
        assert(trim(null) === null);
    });
});
