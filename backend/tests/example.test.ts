
export default function sum(x: number ,y: number): number{
    return x + y;
}

describe('sum function', () => {
  it('should correctly add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
