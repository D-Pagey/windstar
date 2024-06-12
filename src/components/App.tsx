import { useState } from 'react'
import { WindForm } from './WindForm'
import { Correction } from '@/types'
import { ModeToggle } from './ModeToggle'

const compassDirections: Record<number, string> = {
  360: 'North',
  45: 'North East',
  90: 'East',
  135: 'South East',
  180: 'South',
  225: 'South West',
  270: 'West',
  315: 'North West'
}

export default function App() {
  const [windCorrections, setWindCorrections] = useState<Correction[]>()

  return (
    <div>
      <ModeToggle />
      <div className="bg-gray-50">
        <ul>
          {windCorrections?.map((windCorrection) => (
            <li key={windCorrection.trueCourse}>
              <p>
                {compassDirections[windCorrection.trueCourse]} -{' '}
                {windCorrection.trueCourse}
              </p>
              <p>{windCorrection.correctionAngle}</p>
              <p>
                {windCorrection.trueCourse + windCorrection.correctionAngle}
              </p>
              <p>{windCorrection.groundSpeed}</p>
            </li>
          ))}
        </ul>

        <WindForm setWindCorrection={setWindCorrections} />
      </div>
    </div>
  )
}
