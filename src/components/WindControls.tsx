import { ChangeEvent } from 'react'

import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'

type Props = {
  setWindDirection: (direction: number) => void
  windDirection: number
  setWindSpeed: (speed: number) => void
  windSpeed: number
}

export const WindControls = ({
  setWindSpeed,
  windSpeed,
  setWindDirection,
  windDirection
}: Props) => {
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
    <div className="flex gap-6">
      <Input
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
  )
}
