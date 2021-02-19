import { useState } from "react";
import './Sentence.css'

interface SentenceProps {
  en: string
  ja: string
}

export default function Sentence(props: SentenceProps) {
  const [show, setShow] = useState(false)
  return (
    <div className="Sentence">
      <p className="sentence">{props.en}</p>
      <div className="ja">
        <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
        {show && <p className="sentence">{props.ja}</p>}
      </div>
    </div>
  )
}
