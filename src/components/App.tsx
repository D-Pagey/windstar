import { useState } from 'react'

import { WindControls } from './WindControls'
import { HeadingIndicator } from './HeadingIndicator'
// import { HeadingSvg } from './HeadingSvg'

// remove unused components, libs

export default function App() {
  // const [windCorrections, setWindCorrections] = useState<Correction[]>()
  const [windDirection, setWindDirection] = useState(270)
  const [windSpeed, setWindSpeed] = useState(25)
  const [trueAirSpeed, setTrueAirSpeed] = useState(90)

  return (
    <div className="flex min-h-screen grow flex-col bg-gray-50 p-4 dark:bg-slate-900">
      <HeadingIndicator
        windDirection={windDirection}
        windSpeed={windSpeed}
        trueAirSpeed={trueAirSpeed}
      />

      <WindControls
        windDirection={windDirection}
        setWindDirection={setWindDirection}
        windSpeed={windSpeed}
        setWindSpeed={setWindSpeed}
        trueAirSpeed={trueAirSpeed}
        setTrueAirSpeed={setTrueAirSpeed}
      />
      {/* <HeadingSvg /> */}
    </div>
  )
}
