import { create } from 'zustand'
interface miniModalInterface {
  str: string
  setMiniModal: (str: string) => void
}
const useMiniModalStore = create<miniModalInterface>(set => ({
  str: '',
  setMiniModal: (str: string) => {
    set((state: { str: string }) => ({
      str: str,
    })),
      document.querySelector('.mini-modal')?.classList.add('active')
    setTimeout(() => {
      document.querySelector('.mini-modal')?.classList.remove('active')
    }, 5000)
  },
}))
export default useMiniModalStore
