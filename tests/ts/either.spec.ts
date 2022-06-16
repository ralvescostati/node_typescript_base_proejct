import { left, right } from '../../src/ts/either'

describe('ts::either', () => {
  describe('right', () => {
    it('isRight should return true', () => {
      const result = right({})
      expect(result.isRight()).toBeTruthy()
    })

    it('isLeft should return false', () => {
      const result = right({})
      expect(result.isLeft()).toBeFalsy()
    })
  })

  describe('left', () => {
    it('isRight should return false', () => {
      const result = left({})
      expect(result.isRight()).toBeFalsy()
    })

    it('isLeft should return true', () => {
      const result = left({})
      expect(result.isLeft()).toBeTruthy()
    })
  })
})
