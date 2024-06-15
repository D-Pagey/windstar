const BaseLine = () => (
  <line
    x1="10"
    y1="50"
    x2="42"
    y2="50"
    className="stroke-white stroke-2"
    strokeLinecap="round"
  />
)

const FiveKnots = () => (
  <>
    <BaseLine />
    <line
      strokeLinecap="round"
      x1="12"
      y1="41"
      x2="15"
      y2="50"
      className="stroke-white stroke-2"
    />
  </>
)

type Props = {
  speed: number
}

export const WindIndicator = ({ speed }: Props) => {
  const generateBarbs = () => {
    if (speed <= 2) return null
    if (speed <= 8) return <FiveKnots />

    return null
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
      {/* <line
        strokeLinecap="round"
        x1="5"
        y1="35"
        x2="10"
        y2="50"
        className="stroke-white stroke-2"
      /> */}
    </svg>
  )
}
