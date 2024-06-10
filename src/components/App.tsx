import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  windDirection: number
  windSpeed: number
  trueAirSpeed: number
}

type Direction = {
  groundSpeed: number
  correctionAngle: number
}

type Directions = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW' | 'N'

export default function App() {
  const [windAccounted, setWindAccounted] =
    useState<Record<Directions, Direction>>()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const updated: Record<Directions, Direction> = {
      N: { groundSpeed: 100, correctionAngle: -5 },
      NE: { groundSpeed: 100, correctionAngle: -5 },
      E: { groundSpeed: 100, correctionAngle: -5 },
      SE: { groundSpeed: 100, correctionAngle: -5 },
      S: { groundSpeed: 100, correctionAngle: -5 },
      SW: { groundSpeed: 100, correctionAngle: -5 },
      W: { groundSpeed: 100, correctionAngle: -5 },
      NW: { groundSpeed: 100, correctionAngle: -5 }
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
          {...register('trueAirSpeed', { required: true })}
        />
        {errors.trueAirSpeed && <span>This field is required</span>}

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
