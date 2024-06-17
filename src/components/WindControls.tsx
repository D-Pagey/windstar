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
  const handleSpeedChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)

    if (value >= 50) {
      return setWindSpeed(360)
    }
    if (value <= 0 || Number.isNaN(value)) {
      return setWindSpeed(0)
    }

    setWindSpeed(value)
  }

  const handleAirSpeedChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)

    if (value >= 200) {
      return setTrueAirSpeed(200)
    }

    if (value <= 0 || Number.isNaN(value)) {
      return setTrueAirSpeed(0)
    }

    setTrueAirSpeed(value)
  }
  const handleDirectionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)

    if (value >= 360) {
      return setWindDirection(360)
    }

    if (value <= 0 || Number.isNaN(value)) {
      return setWindDirection(0)
    }

    setWindDirection(value)
  }

  return (
    <div className="flex flex-col">
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
          onChange={handleDirectionChange}
        />
        <Slider
          min={1}
          max={360}
          step={1}
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
          onChange={handleSpeedChange}
        />
        <Slider
          min={1}
          max={50}
          step={1}
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
          onChange={handleAirSpeedChange}
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
