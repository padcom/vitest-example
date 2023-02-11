import { describe, it, expect } from 'vitest'
import { Example } from './Example'

describe('Example test', () => {
  it('will work', () => {
    const example = new Example(1)
    expect(example.value).toBe(1)
    expect(example.foo().value).toBe(4)
    // expect(example.foo().value).toBe(5)
    const x = 3, y = 7
    expect(x + y).toBe(10)
  })
})
