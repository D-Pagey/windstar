import { Correction } from '@/types'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getCorrectionAngleAndSpeed = ({
  windSpeed,
  windDirection,
  trueCourse,
  trueAirspeed
}: {
  windSpeed: number
  windDirection: number
  trueCourse: number
  trueAirspeed: number
}) => {
  const relativeWindAngle = windDirection - trueCourse
  const sine = Math.sin(relativeWindAngle * (Math.PI / 180)) // convert degrees to radians
  const speedsRatio = windSpeed / trueAirspeed
  const product = speedsRatio * sine
  const windCorrectionAngle = Math.asin(product) * (180 / Math.PI) // convert radians to degrees

  const heading = windDirection - (trueCourse + windCorrectionAngle)
  const cosine = Math.cos(heading * (Math.PI / 180))
  const groundSpeed = Math.sqrt(
    Math.pow(trueAirspeed, 2) +
      Math.pow(windSpeed, 2) -
      2 * trueAirspeed * windSpeed * cosine
  )

  return {
    correctionAngle: Number(windCorrectionAngle.toFixed(1)),
    groundSpeed: Math.round(groundSpeed),
    trueCourse
  }
}

export const generateCompassCorrections = ({
  windSpeed,
  windDirection,
  trueAirspeed
}: {
  windSpeed: number
  windDirection: number
  trueAirspeed: number
}): Correction[] => {
  const courseOptions = [360, 45, 90, 135, 180, 225, 270, 315]

  return courseOptions.map((course) =>
    getCorrectionAngleAndSpeed({
      windSpeed,
      windDirection,
      trueAirspeed,
      trueCourse: course
    })
  )
}
