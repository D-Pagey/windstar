import { Correction } from '@/types'

const points = [0, 45, 90, 135, 180, 225, 270, 315]

const letters = {
  N: 'translate(-50%, -100%) translateY(-52px) translateX(1px)',
  E: 'translate(-50%, -100%) translateY(18px) translateX(75px)',
  S: 'translate(-50%, -100%) translateY(85px) translateX(0px)',
  W: 'translate(-50%, -100%) translateY(18px) translateX(-70px)'
}

// easier to use css and media queeries?
// google at least ask somewhere
const corrections: Record<number, string> = {
  360: 'translate(-50%, -100%) translateY(-180px) translateX(0px)',
  45: 'translate(-50%, -100%) translateY(-100px) translateX(160px)',
  90: 'translate(-50%, -100%) translateY(30px) translateX(192px)',
  135: 'translate(-50%, -100%) translateY(170px) translateX(140px)',
  180: 'translate(-50%, -100%) translateY(240px) translateX(0px)',
  225: 'translate(-50%, -100%) translateY(190px) translateX(-130px)',
  270: 'translate(-50%, -100%) translateY(35px) translateX(-190px)',
  315: 'translate(-50%, -100%) translateY(-115px) translateX(-150px)'
}

type Props = {
  windCorrections?: Correction[]
}

export const HeadingIndicator = ({ windCorrections }: Props) => {
  return (
    <div className="flex justify-center w-max self-center">
      <div
        className="size-[220px] rounded-full relative"
        style={{ backgroundColor: '#232323' }}
      >
        {points.map((point) => (
          <div
            key={point}
            style={{
              transform: `translate(-50%, -100%) rotate(${point}deg) translateY(-90px)`
            }}
            className="h-[20px] w-[2px] bg-white absolute top-1/2 left-1/2 origin-bottom"
          />
        ))}

        {Object.entries(letters).map(([letter, transform]) => (
          <p
            key={letter}
            style={{
              transform
            }}
            className="text-white absolute top-1/2 left-1/2 text-3xl"
          >
            {letter}
          </p>
        ))}

        {windCorrections?.map((correction) => (
          <div
            className="w-max absolute top-1/2 left-1/2"
            style={{
              transform: corrections[correction.trueCourse]
            }}
            key={correction.trueCourse}
          >
            <p className="text-2xl">{correction.groundSpeed}</p>
            <p className="text-2xl">{correction.correctionAngle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
