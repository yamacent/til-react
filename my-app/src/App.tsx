import { useState } from 'react';

interface SentenceProps {
  en: string
  ja: string
}

function Sentence(props: SentenceProps) {
  const [show, setShow] = useState(false)
  return (
    <div>
      <p>{props.en}</p>
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {show && <p>{props.ja}</p>}
    </div>
  );
}

export default function App() {
  const sentences = [
    {en: 'this is a pen',  ja: 'これはペンです'},
    {en: 'this is a cat',  ja: 'これは猫です'},
    {en: 'this is a dog',  ja: 'これは犬です'}
  ]

  const [index, setIndex] = useState(0)

  const sentence = sentences[index]

  return (
    <div>
      {index < sentences.length ? (
        <>
          <Sentence en={sentence.en} ja={sentence.ja} />
          <button onClick={() => setIndex(index + 1)}>Next</button>
        </>
      ) : (
        <>
          <p>Done!</p>
          <button onClick={() => setIndex(0)}>Retry</button>
        </>
      )}
    </div>
  );
}
