import { getCorrectionAngleAndSpeed } from './utils'

describe('getCorrectionAngleAndSpeed', () => {
  it.each`
    windDirection | windSpeed | trueAirspeed | trueCourse | expected
    ${270}        | ${30}     | ${120}       | ${360}     | ${{ groundSpeed: 116, correctionAngle: -14.5 }}
    ${270}        | ${30}     | ${120}       | ${90}      | ${{ groundSpeed: 150, correctionAngle: 0 }}
    ${270}        | ${30}     | ${120}       | ${45}      | ${{ groundSpeed: 139, correctionAngle: -10.2 }}
  `(
    'should return correct wind angle and speed',
    ({ windDirection, windSpeed, trueAirspeed, trueCourse, expected }) => {
      const result = getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirspeed,
        trueCourse
      })
      expect(result).toStrictEqual(expected)
    }
  )
})
