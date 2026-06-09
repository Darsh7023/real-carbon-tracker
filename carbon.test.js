function calculateCarbonScore(mobility, energy, diet) {
    return parseFloat((mobility + energy + diet).toFixed(1));
}

test('calculates correct low impact carbon footprint score', () => {
    expect(calculateCarbonScore(0.8, 1.2, 1.5)).toBe(3.5);
});

test('calculates correct high impact carbon footprint score', () => {
    expect(calculateCarbonScore(7.5, 6.8, 5.9)).toBe(20.2);
});
