import { useState } from "react";

interface SentenceProps {
  en: string
  ja: string
}

export default function Sentence(props: SentenceProps) {
  const [show, setShow] = useState(false)
  return (
    <div>
      <p>{props.en}</p>
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {show && <p>{props.ja}</p>}
    </div>
  )
}
