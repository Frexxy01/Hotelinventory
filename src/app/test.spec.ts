import { Calculator } from './test.service'

describe('test case', () =>  {
  it('it should add two numbers', () => {
    const calc = new Calculator
    expect(calc.add(1,1)).toBe(2)
  })
  it('it should substract two numbers', () => {
    const calc = new Calculator
    expect(calc.substract(2,1)).toBe(1)
  })

  it('it should multiply two numbers', () => {
    const calc = new Calculator
    expect(calc.muliply(2,2)).toBe(4)
  })

})