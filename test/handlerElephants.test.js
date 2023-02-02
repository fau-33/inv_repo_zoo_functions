const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('parameter is count returns 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('parameter is count an array that contains Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('parameter is averageAge return approximately 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('parameter is location return NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('parameter is popularity return a number equal or greate 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('parameter is availability return an array of weekdays without monday', () => {
    const weekdays = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(weekdays);
  });
  it('parameter return undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('parameter is object {} return a string parameter invalido, é necessário uma string', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants({})).toBe(expected);
  });
  it('parameter is a string that does not include a funcionality must return null', () => {
    expect(handlerElephants('nothing')).toBeNull();
  });
});
