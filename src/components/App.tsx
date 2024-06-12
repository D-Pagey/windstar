import { useState } from 'react'
import { WindForm } from './WindForm'

type Direction = {
  groundSpeed: number
  correctionAngle: number
}

type Directions = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW' | 'N'

export type Wind = Record<Directions, Direction>

export default function App() {
  const [windAccounted, setWindAccounted] = useState<Wind>()

  return (
    <div className="bg-gray-50">
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

      <WindForm setWindCorrection={setWindAccounted} />
    </div>
  )
}
