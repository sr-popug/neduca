import { useState } from 'react'

export default function useLocalStorage(key: string, value: string) {
  const [state, setState] = useState<string | null>(localStorage.getItem(key))
  function removeValue() {
    localStorage.removeItem(key)
  }
  function setStateLocal() {
    localStorage.setItem(key, value)
    setState(value)
  }

  return [state, setStateLocal, removeValue]
}
