import { useState } from 'react'
import { Mail } from 'lucide-react'
import { WindControls } from './WindControls'
import { HeadingIndicator } from './HeadingIndicator'

export default function App() {
  const [windDirection, setWindDirection] = useState(270)
  const [windSpeed, setWindSpeed] = useState(25)
  const [trueAirSpeed, setTrueAirSpeed] = useState(90)
  const feedbackEmail = import.meta.env.VITE_FEEDBACK_EMAIL

  return (
    <div className="min-h-screen text-slate-800 bg-gradient-to-t from-blue-100 to-50%">
      <header className="border p-4 shadow-sm flex justify-between items-center">
        <p className="text-2xl">Windstar</p>
        <a href={`mailto:${feedbackEmail}?subject=Windstar Feedback`}>
          <Mail />
        </a>
      </header>

      <main className="mx-auto grid w-full max-w-lg grow p-4 pb-32 lg:max-w-4xl lg:grid-cols-2 lg:gap-x-6 lg:gap-y-12 lg:px-0">
        <div className="py-4 lg:col-span-2">
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
