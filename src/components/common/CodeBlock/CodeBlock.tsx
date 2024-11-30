'use client'

import 'highlight.js/styles/base16/isotope.min.css'
import { useRef } from 'react'
import './codeBlock.scss'

export default function CodeBlock({ node }: { node: string }) {
  const code = useRef<HTMLElement>(null)
  // useEffect(() => {
  //   code.current && (code.current.dataset.highlighted = '')
  //   code.current && hljs.highlightElement(code.current)
  // }, [node])

  return (
    <article className='code'>
      <div className='left-elem'></div>
      <pre className='prettyprint'>
        <code ref={code} className='hljs'>
          {node}
        </code>
      </pre>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/styles/arta.min.css'
      />
    </article>
  )
}
