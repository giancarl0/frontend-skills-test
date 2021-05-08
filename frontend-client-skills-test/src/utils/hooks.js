import { useCallback, useState } from "react"

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => {
    setValue(val => !val)
  }, [])

  return [value, toggle]
}