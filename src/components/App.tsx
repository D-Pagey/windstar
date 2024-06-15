import { useState } from 'react'
import { WindForm } from './WindForm'
import { Correction } from '@/types'
import { HeadingIndicator } from './HeadingIndicator'
// import { HeadingSvg } from './HeadingSvg'

export default function App() {
  const [windCorrections, setWindCorrections] = useState<Correction[]>()
  const [wind, setWind] = useState<{ direction: number; speed: number }>()

  return (
    <div className="bg-gray-50 p-4 dark:bg-slate-900 flex flex-col grow min-h-screen">
      <HeadingIndicator windCorrections={windCorrections} wind={wind} />
      <WindForm setWindCorrection={setWindCorrections} setWind={setWind} />
      {/* <HeadingSvg /> */}
    </div>
  )
}
