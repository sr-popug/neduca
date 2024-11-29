'use client'

import useMiniModalStore from '@/store/miniModalStore'
import './minimodal.scss'

export default function MiniModal() {
  const str = useMiniModalStore(state => state.str)
  return <output className='mini-modal'>{str}</output>
}
