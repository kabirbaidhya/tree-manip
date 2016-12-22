import {assert, expect} from 'chai';
import * as util from '../src/util';

describe('util.arrayIncludes', () => {
    it('should return true if the array includes the value', () => {
        assert.isTrue(util.arrayIncludes(['Foo', 'Bar'], 'Foo'));
    });

    it('should return false if the array doesn\'t the value', () => {
        assert.isFalse(util.arrayIncludes(['Foo', 'Bar'], 'Test'));
    });
});

describe('util.copyExcludingKeys', () => {
    it('should return all the keys expect the excluded ones', () => {
        let object = {
            id: 1,
            name: 'Test Node 1',
            children: [
                {
                    id: 2,
                    name: 'Test Node 2'
                }
            ],
            foo: 'Bar',
            title: 'Test'
        };
        let result = util.copyExcludingKeys(object, ['children', 'name']);
        let expected = {
            id: 1,
            foo: 'Bar',
            title: 'Test'
        };

        expect(result).to.deep.equal(expected);
    });
});