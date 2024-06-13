export const HeadingIndicator = () => {
  const points = [0, 45, 90, 135, 180, 225, 270, 315]
  const letters = [
    {
      direction: 'N',
      transform: 'translate(-50%, -100%) translateY(-99px) translateX(-11px)'
    },
    {
      direction: 'E',
      transform: 'translate(-50%, -100%) translateY(10px) translateX(110px)'
    },
    {
      direction: 'S',
      transform: 'translate(-50%, -100%) translateY(116px) translateX(-8px)'
    },
    {
      direction: 'W',
      transform: 'translate(-50%, -100%) translateY(10px) translateX(-120px)'
    }
  ]
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
      {letters.map((letter) => (
        <p
          style={{
            transform: letter.transform
          }}
          className="h-8 w-1 text-white absolute top-1/2 left-1/2 text-4xl"
        >
          {letter.direction}
        </p>
      ))}
    </div>
  )
}
