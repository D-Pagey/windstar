import { getCorrectionAngleAndSpeed } from './utils'

describe('getCorrectionAngleAndSpeed', () => {
  it.each`
    windDirection | windSpeed | trueAirSpeed | trueCourse | expected
    ${270}        | ${30}     | ${120}       | ${360}     | ${{ groundSpeed: 116, correctionAngle: -14.5, trueCourse: 360 }}
    ${270}        | ${30}     | ${120}       | ${90}      | ${{ groundSpeed: 150, correctionAngle: 0, trueCourse: 90 }}
    ${270}        | ${30}     | ${120}       | ${45}      | ${{ groundSpeed: 139, correctionAngle: -10.2, trueCourse: 45 }}
  `(
    'should return correct wind angle and speed',
    ({ windDirection, windSpeed, trueAirSpeed, trueCourse, expected }) => {
      const result = getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirSpeed,
        trueCourse
      })
      expect(result).toStrictEqual(expected)
    }
  )
})
