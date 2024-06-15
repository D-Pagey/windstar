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
  45: 'translate(-50%, -100%) translateY(-60px) translateX(118px)',
  90: 'translate(-50%, -100%) translateY(25px) translateX(141px)',
  135: 'translate(-50%, -100%) translateY(116px) translateX(118px)',
  180: 'translate(-50%, -100%) translateY(160px) translateX(8px)',
  225: 'translate(-50%, -100%) translateY(116px) translateX(-115px)',
  270: 'translate(-50%, -100%) translateY(25px) translateX(-140px)',
  315: 'translate(-50%, -100%) translateY(-60px) translateX(-115px)',
  360: 'translate(-50%, -100%) translateY(-115px) translateX(8px)'
}

type Props = {
  windCorrections?: Correction[]
}

export const HeadingIndicator = ({ windCorrections }: Props) => {
  return (
    <div className="py-20 flex justify-center w-full border self-center">
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

        {windCorrections?.map(
          ({ trueCourse, correctionAngle, groundSpeed }) => (
            <div
              className="text-white w-max absolute top-1/2 left-1/2"
              style={{
                transform: corrections[trueCourse]
              }}
              key={trueCourse}
            >
              <p className="text">
                {Math.round(trueCourse + correctionAngle)}°
              </p>
              <p className="text">{groundSpeed} kts</p>
            </div>
          )
        )}
      </div>
    </div>
  )
}
