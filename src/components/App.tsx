import { useState } from 'react'

import { WindControls } from './WindControls'
import { HeadingIndicator } from './HeadingIndicator'

export default function App() {
  const [windDirection, setWindDirection] = useState(270)
  const [windSpeed, setWindSpeed] = useState(25)
  const [trueAirSpeed, setTrueAirSpeed] = useState(90)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border p-4 shadow-sm">
        <p className="text-2xl">Windstar</p>
      </header>

      <main className="flex grow flex-col p-4 pb-12">
        <div className="py-4">
          <h1 className="mb-2 text-xl font-semibold">Diversion Planning</h1>
          <p>
            This is a simple tool to help pilots with planning for diversions.
          </p>
        </div>

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
      </main>
    </div>
  )
}
