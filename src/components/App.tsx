import { useState } from 'react'
import { WindForm } from './WindForm'
import { Correction } from '@/types'
import { HeadingIndicator } from './HeadingIndicator'
// import { HeadingSvg } from './HeadingSvg'

export default function App() {
  const [windCorrections, setWindCorrections] = useState<Correction[]>()

  return (
    <div className="bg-gray-50 p-4 dark:bg-slate-900 flex flex-col grow min-h-screen">
      <HeadingIndicator windCorrections={windCorrections} />
      <WindForm setWindCorrection={setWindCorrections} />
      {/* <HeadingSvg /> */}
    </div>
  )
}
