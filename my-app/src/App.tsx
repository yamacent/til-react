import { useState } from 'react';
import sentences from './data/sentences';
import Sentence from './Sentence';

export default function App() {
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
  )
}
