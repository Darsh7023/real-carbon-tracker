function calculateCarbonScore(m,e,d){return parseFloat((m+e+d).toFixed(1));}
test('low',()=>{expect(calculateCarbonScore(0.8,1.2,1.5)).toBe(3.5);});
test('high',()=>{expect(calculateCarbonScore(7.5,6.8,5.9)).toBe(20.2);});
