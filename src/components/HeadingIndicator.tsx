// add the N, E, S, W markings
export const HeadingIndicator = () => {
  const points = [0, 45, 90, 135, 180, 225, 270, 315]
  return (
    <div className="bg-black size-80 rounded-full relative self-center">
      {points.map((point) => (
        <div
          style={{
            transform: `translate(-50%, -100%) rotate(${point}deg) translateY(-128px)`
          }}
          className="h-8 w-1 bg-white absolute top-1/2 left-1/2 origin-bottom"
        />
      ))}
    </div>
  )
}
