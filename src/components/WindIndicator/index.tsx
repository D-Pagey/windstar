import {
  FiveKnots,
  FiveteenKnots,
  TenKnots,
  ThirtyFiveKnots,
  ThirtyKnots,
  TwentyFiveKnots,
  TwentyKnots
} from './Barbs'

type Props = {
  direction?: number
  speed?: number
}

export const WindIndicator = ({ direction, speed }: Props) => {
  if (!speed) return null

  const generateBarbs = () => {
    if (speed <= 2) return null
    if (speed <= 8) return <FiveKnots />
    if (speed <= 12) return <TenKnots />
    if (speed <= 17) return <FiveteenKnots />
    if (speed <= 22) return <TwentyKnots />
    if (speed <= 27) return <TwentyFiveKnots />
    if (speed <= 32) return <ThirtyKnots />

    return <ThirtyFiveKnots />
  }

  const calculateRotation = () => {
    if (!direction) return 0
    return direction - 270
  }

  return (
    <svg
      width="100px"
      height="100px"
      style={{ rotate: `${calculateRotation()}deg` }}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 m-auto"
    >
      <circle
        cx="50"
        cy="50"
        r="7"
        className="fill-none stroke-white stroke-2"
      />
      {generateBarbs()}
    </svg>
  )
}
