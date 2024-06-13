export const HeadingIndicator = () => {
  const points = [0, 45, 90, 135, 180, 225, 270, 315]
  const letters = {
    N: 'translate(-50%, -100%) translateY(-90px) translateX(1px)',
    E: 'translate(-50%, -100%) translateY(18px) translateX(115px)',
    S: 'translate(-50%, -100%) translateY(120px) translateX(0px)',
    W: 'translate(-50%, -100%) translateY(18px) translateX(-108px)'
  }

  const corrections = {
    360: 'translate(-50%, -100%) translateY(18px) translateX(-108px)',
    45: 'translate(-50%, -100%) translateY(18px) translateX(-108px)',
    90: 'translate(-50%, -100%) translateY(18px) translateX(-108px)',
    135: 'translate(-50%, -100%) translateY(18px) translateX(-108px)',
    180: 'translate(-50%, -100%) translateY(18px) translateX(-108px)',
    225: 'translate(-50%, -100%) translateY(18px) translateX(-108px)',
    270: 'translate(-50%, -100%) translateY(18px) translateX(-108px)',
    335: 'translate(-50%, -100%) translateY(18px) translateX(-108px)'
  }

  return (
    <div className="bg-black size-80 rounded-full relative self-center">
      {points.map((point) => (
        <div
          style={{
            transform: `translate(-50%, -100%) rotate(${point}deg) translateY(-132px)`
          }}
          className="h-7 w-1 bg-white absolute top-1/2 left-1/2 origin-bottom"
        />
      ))}
      {Object.entries(letters).map(([letter, transform]) => (
        <p
          style={{
            transform
          }}
          className="text-white absolute top-1/2 left-1/2 text-4xl"
        >
          {letter}
        </p>
      ))}

      <div
        className="w-max absolute top-1/2 left-1/2"
        style={{
          transform: 'translate(-50%, -100%) translateY(240px) translateX(0px)'
        }}
      >
        <p className="text-green-500 text-2xl">98</p>
        <p className="text-blue-400 text-2xl">11</p>
      </div>
    </div>
  )
}
