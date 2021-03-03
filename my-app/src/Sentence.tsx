import { useEffect, useState } from "react";
import { Transition } from 'react-transition-group';
import './Sentence.css'

interface SentenceProps {
  en: string
  ja: string
}

export default function Sentence(props: SentenceProps) {
  const [show, setShow] = useState(false)

  useEffect(() => setShow(false), [props.en])

  const defaultStyle = {
    transition: `opacity 200ms ease-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  };

  return (
    <div className="Sentence">
      <p className="sentence">{props.en}</p>
      <div className="ja">
        <button className="btn btn-secondary" onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'} Japanese</button>
        <Transition in={show} timeout={200} key={props.en}>
          {(state: keyof typeof transitionStyles) => (
            <p className="sentence" style={{...defaultStyle, ...transitionStyles[state]}}>{props.ja}</p>
          )}
        </Transition>
      </div>
    </div>
  )
}
