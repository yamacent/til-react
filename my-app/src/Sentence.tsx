import { useEffect, useState } from "react";
import './Sentence.css'

interface SentenceProps {
  en: string
  ja: string
}

export default function Sentence(props: SentenceProps) {
  const [show, setShow] = useState(false)

  useEffect(() => setShow(false), [props.en])

  return (
    <div className="Sentence">
      <p className="sentence">{props.en}</p>
      <div className="ja">
        <button className="btn btn-secondary" onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'} Japanese</button>
        {show && <p className="sentence">{props.ja}</p>}
      </div>
    </div>
  )
}
