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
  speed: number
}

export const WindIndicator = ({ speed }: Props) => {
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

  return (
    <svg
      width="100px"
      height="100px"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="border border-green-400 absolute left-0 right-0 top-0 bottom-0 m-auto"
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
