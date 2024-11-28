'use client'

import useMiniModalStore from '@/store/miniModalStore'
import './minimodal.scss'

export default function MiniModal() {
  const str = useMiniModalStore(state => state.str)
  return <div className='mini-modal'>{str}</div>
}
