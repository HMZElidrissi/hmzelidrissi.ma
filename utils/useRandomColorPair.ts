import { useMemo } from 'react'
import { Tuple } from 'utils/types'

export function useRandomColorPair(): Tuple<string> {
  const colors: Tuple<string>[] = [
    ['#F5E1FF', '#CAF0F8'],
    ['#EAF4F4', '#FFEDD8'],
    ['#EDF8FF', '#EDE9F6'],
    ['#EEEBFF', '#FFFAD4'],
  ]

  const random = Math.round(Math.random() * (colors.length - 1))

  return useMemo(() => colors[random], [])
}
