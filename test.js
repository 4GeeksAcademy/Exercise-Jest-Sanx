const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
});

test("One Yen should be 156.5 / 1.07 Dollar", function() {
    const { fromDollarToYen } = require('./app.js');
    const Yen = fromDollarToYen(3.5);
    const expected = 3.5 * (156.5/1.07);
    expect(fromDollarToYen(3.5)).toBe(expected); 
});

test("One Yen should be 0.87/156.5 Pound", function() {
    const { fromYenToPound } = require('./app.js');
    const Yen = fromYenToPound(3.5);
    const expected = 3.5 * (0.87/156.5);
    expect(fromYenToPound(3.5)).toBe(expected); 
});