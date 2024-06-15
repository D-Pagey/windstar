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

const FirstLongBarb = () => (
  <line
    strokeLinecap="round"
    x1="5"
    y1="35"
    x2="10"
    y2="50"
    className="stroke-white stroke-2"
  />
)
export const FiveKnots = () => (
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

export const TenKnots = () => (
  <>
    <BaseLine />
    <FirstLongBarb />
  </>
)

export const FiveteenKnots = () => (
  <>
    <BaseLine />
    <FirstLongBarb />
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

export const TwentyKnots = () => (
  <>
    <BaseLine />
    <FirstLongBarb />
    <line
      strokeLinecap="round"
      x1="10"
      y1="35"
      x2="15"
      y2="50"
      className="stroke-white stroke-2"
    />
  </>
)

export const TwentyFiveKnots = () => (
  <>
    <BaseLine />
    <FirstLongBarb />
    <line
      strokeLinecap="round"
      x1="10"
      y1="35"
      x2="15"
      y2="50"
      className="stroke-white stroke-2"
    />
    <line
      strokeLinecap="round"
      x1="17"
      y1="41"
      x2="20"
      y2="50"
      className="stroke-white stroke-2"
    />
  </>
)

export const ThirtyKnots = () => (
  <>
    <BaseLine />
    <FirstLongBarb />
    <line
      strokeLinecap="round"
      x1="10"
      y1="35"
      x2="15"
      y2="50"
      className="stroke-white stroke-2"
    />
    <line
      strokeLinecap="round"
      x1="15"
      y1="35"
      x2="20"
      y2="50"
      className="stroke-white stroke-2"
    />
  </>
)

export const ThirtyFiveKnots = () => (
  <>
    <BaseLine />
    <FirstLongBarb />
    <line
      strokeLinecap="round"
      x1="10"
      y1="35"
      x2="15"
      y2="50"
      className="stroke-white stroke-2"
    />
    <line
      strokeLinecap="round"
      x1="15"
      y1="35"
      x2="20"
      y2="50"
      className="stroke-white stroke-2"
    />
    <line
      strokeLinecap="round"
      x1="22"
      y1="41"
      x2="25"
      y2="50"
      className="stroke-white stroke-2"
    />
  </>
)
