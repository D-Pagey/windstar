import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from './ui/input'
import { getCorrectionAngleAndSpeed } from '@/lib/utils'

type Inputs = {
  windDirection: number
  windSpeed: number
  trueAirspeed: number
}

type Direction = {
  groundSpeed: number
  correctionAngle: number
}

type Directions = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW' | 'N'

type Wind = Record<Directions, Direction>

export default function App() {
  const [windAccounted, setWindAccounted] = useState<Wind>()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = ({
    windDirection,
    windSpeed,
    trueAirspeed
  }) => {
    const updated: Wind = {
      N: getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirspeed,
        trueCourse: 360
      }),
      NE: getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirspeed,
        trueCourse: 45
      }),
      E: getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirspeed,
        trueCourse: 90
      }),
      SE: getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirspeed,
        trueCourse: 135
      }),
      S: getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirspeed,
        trueCourse: 180
      }),
      SW: getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirspeed,
        trueCourse: 225
      }),
      W: getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirspeed,
        trueCourse: 270
      }),
      NW: getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirspeed,
        trueCourse: 315
      })
    }

    setWindAccounted(updated)
  }

  return (
    <div className="bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border flex flex-col p-4"
      >
        <label>True Airspeed</label>
        <input
          defaultValue={0}
          {...register('trueAirspeed', { required: true })}
        />
        <Input />
        {errors.trueAirspeed && <span>This field is required</span>}

        <label>Wind direction</label>
        <input
          defaultValue={180}
          {...register('windDirection', { required: true, max: 360 })}
        />
        {errors.windDirection && <span>Something wrong</span>}

        <label>Wind speed</label>
        <input
          defaultValue={0}
          {...register('windSpeed', { required: true })}
        />
        {errors.windSpeed && <span>This field is required</span>}

        <input type="submit" />
      </form>
      <div>
        <p>
          N = {windAccounted?.N.correctionAngle} -{' '}
          {windAccounted?.N.groundSpeed}
        </p>
        <p>
          NE = {windAccounted?.NE.correctionAngle} -{' '}
          {windAccounted?.NE.groundSpeed}
        </p>
        <p>
          E = {windAccounted?.E.correctionAngle} -{' '}
          {windAccounted?.E.groundSpeed}
        </p>
        <p>
          SE = {windAccounted?.SE.correctionAngle} -{' '}
          {windAccounted?.SE.groundSpeed}
        </p>
        <p>
          S = {windAccounted?.S.correctionAngle} -{' '}
          {windAccounted?.S.groundSpeed}
        </p>
        <p>
          SW = {windAccounted?.SW.correctionAngle} -{' '}
          {windAccounted?.SW.groundSpeed}
        </p>
        <p>
          W = {windAccounted?.W.correctionAngle} -{' '}
          {windAccounted?.W.groundSpeed}
        </p>
        <p>
          NW = {windAccounted?.NW.correctionAngle} -{' '}
          {windAccounted?.NW.groundSpeed}
        </p>
      </div>
    </div>
  )
}
