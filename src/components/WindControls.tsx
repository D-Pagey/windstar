import { ChangeEvent } from 'react'

import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'
import { Label } from './ui/label'

type Props = {
  setWindDirection: (direction: number) => void
  windDirection: number
  setWindSpeed: (speed: number) => void
  windSpeed: number
  setTrueAirSpeed: (speed: number) => void
  trueAirSpeed: number
}

export const WindControls = ({
  setWindSpeed,
  windSpeed,
  setWindDirection,
  windDirection,
  setTrueAirSpeed,
  trueAirSpeed
}: Props) => {
  const handleChange = ({
    value,
    upperLimit,
    setter
  }: {
    value: number
    upperLimit: number
    setter: (value: number) => void
  }) => {
    if (value >= upperLimit) {
      return setter(360)
    }
    if (value <= 0 || Number.isNaN(value)) {
      return setter(0)
    }

    setter(value)
  }

  return (
    <div className="flex max-w-md flex-col">
      <Label htmlFor="windDirection" className="mb-2">
        Wind Direction
      </Label>
      <div className="mb-2 flex gap-6">
        <Input
          name="windDirection"
          value={windDirection}
          max={360}
          inputMode="numeric"
          className="w-[80px]"
          onChange={(event) =>
            handleChange({
              setter: setWindDirection,
              upperLimit: 360,
              value: parseInt(event.target.value)
            })
          }
        />
        <Slider
          min={0}
          max={360}
          step={5}
          onValueChange={(vals) => {
            setWindDirection(vals[0])
          }}
          value={[windDirection]}
        />
      </div>
      <p className="text-sm">Which direction is the wind coming from?</p>

      <Label htmlFor="windSpeed" className="mb-2 mt-6">
        Wind Speed
      </Label>
      <div className="mb-2 flex gap-6">
        <Input
          name="windSpeed"
          value={windSpeed}
          max={50}
          inputMode="numeric"
          className="w-[80px]"
          onChange={(event) =>
            handleChange({
              setter: setWindSpeed,
              upperLimit: 50,
              value: parseInt(event.target.value)
            })
          }
        />
        <Slider
          min={0}
          max={50}
          step={5}
          onValueChange={(vals) => {
            setWindSpeed(vals[0])
          }}
          value={[windSpeed]}
        />
      </div>
      <p className="text-sm">What is the speed of the wind in knots?</p>

      <Label htmlFor="trueAirSpeed" className="mb-2 mt-6">
        True airspeed
      </Label>
      <div className="mb-2 flex gap-6">
        <Input
          name="trueAirSpeed"
          value={trueAirSpeed}
          min={50}
          max={200}
          inputMode="numeric"
          className="w-[80px]"
          onChange={(event) =>
            handleChange({
              setter: setTrueAirSpeed,
              upperLimit: 200,
              value: parseInt(event.target.value)
            })
          }
        />
        <Slider
          min={50}
          max={200}
          step={5}
          onValueChange={(vals) => {
            setTrueAirSpeed(vals[0])
          }}
          value={[trueAirSpeed]}
        />
      </div>
      <p className="text-sm">Which direction is the wind coming from?</p>
    </div>
  )
}
