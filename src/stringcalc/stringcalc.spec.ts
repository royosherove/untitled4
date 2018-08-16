import {StringCalc} from './stringCalc';

describe('string calc',function () {
  it('should return default on empty string', function () {
    const calc = new StringCalc();
    const result = calc.sum('');
    expect(result).toBe(0);
  });

});
