import { useDebounce } from 'use-debounce'
import { generateCompassCorrections } from '@/lib/utils'
import { WindIndicator } from './WindIndicator'

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
  windDirection: number
  windSpeed: number
  trueAirSpeed: number
}

export const HeadingIndicator = ({
  trueAirSpeed,
  windSpeed,
  windDirection
}: Props) => {
  const [windCorrections] = useDebounce(
    generateCompassCorrections({
      windDirection,
      windSpeed,
      trueAirSpeed
    }),
    250
  )

  return (
    <div className="flex w-full justify-center self-center py-14">
      <div
        className="relative size-[220px] rounded-full"
        style={{ backgroundColor: '#232323' }}
      >
        {points.map((point) => (
          <div
            key={point}
            style={{
              transform: `translate(-50%, -100%) rotate(${point}deg) translateY(-90px)`
            }}
            className="absolute left-1/2 top-1/2 h-[20px] w-[2px] origin-bottom bg-white"
          />
        ))}

        {Object.entries(letters).map(([letter, transform]) => (
          <p
            key={letter}
            style={{
              transform
            }}
            className="absolute left-1/2 top-1/2 text-3xl text-white"
          >
            {letter}
          </p>
        ))}

        <WindIndicator speed={windSpeed} direction={windDirection} />

        {windCorrections.map(({ trueCourse, correctionAngle, groundSpeed }) => {
          const colors = {
            slower: 'text-red-600',
            faster: 'text-green-600'
          }

          const direction = Math.round(trueCourse + correctionAngle)

          return (
            <div
              className="absolute left-1/2 top-1/2 w-max"
              style={{
                transform: corrections[trueCourse]
              }}
              // ensure rerender when values changes triggering fade animation
              key={trueCourse}
            >
              {!Number.isNaN(direction) && (
                <p style={{ color: '#FF00FF' }}>{direction}°</p>
              )}
              <p
                className={
                  groundSpeed > trueAirSpeed
                    ? colors.faster
                    : groundSpeed < trueAirSpeed
                      ? colors.slower
                      : ''
                }
              >
                {!Number.isNaN(groundSpeed) && `${groundSpeed} kts`}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
