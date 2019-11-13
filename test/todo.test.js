// const fc = require('fast-check')
import * as fc from 'fast-check'
import { addTodo } from '../src/helpers'

function testingDOM () {
  const div = document.createElement('div')
  div.innerHTML = `
    <div>
      <input type="text" />
      <button class="add">Add</button>
    </div>
    <ul class="todos"></ul>`

  return div
}

// Code under test
const contains = (text, pattern) => text.indexOf(pattern) >= 0
const map = (fn, list) => {
  return list.reduce((acc, next) => {
    return [...acc, fn(next)]
  }, [])
}

const double = n => n * 2
const reverse = list => {
  return list.reduceRight((acc, next) => {
    return [...acc, next]
  }, [])
}

const filter = (fn, list) => {
  return list.reduce((acc, next) => {
    return fn(next) ? [...acc, next] : acc
  }, [])
}

// Properties
describe('properties', () => {
  // string text always contains itself
  it('should always contain itself', () => {
    fc.assert(fc.property(fc.string(), text => contains(text, text)))
  })
  // string a + b + c always contains b, whatever the values of a, b and c
  it('should always contain its substrings', () => {
    fc.assert(
      fc.property(fc.string(), fc.string(), fc.string(), (a, b, c) =>
        contains(a + b + c, b)
      )
    )
  })
  it('double the numbers', () => {
    const list = [1, 2, 3, 4]
    const expected = [2, 4, 6, 8]
    const actual = map(double, list)
    expect(actual).toEqual(expected)
  })

  it('should have the same length as the input list', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), data => {
        const expected = data.length
        const actual = map(double, data).length
        expect(actual).toEqual(expected)
      })
    )
  })

  it('should return the same list if reverse is called twice', () => {
    fc.assert(
      fc.property(fc.array(fc.string()), data => {
        const expected = data
        const actual = reverse(reverse(data))
        expect(actual).toEqual(expected)
      }),
      { verbose: true }
    )
  })

  it('should have the same or smaller length', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), data => {
        const expected = data
        const actual = filter(n => n % 2 === 0, data)
        expect(actual.length).toBeLessThanOrEqual(expected.length)
      })
    )
  })
})

describe('adds a todo', () => {
  it('should add a todo when the add button is click', () => {
    const fakeDOM = testingDOM()
    console.log({ addTodo })
    expect(false).toEqual(true)
  })
})
