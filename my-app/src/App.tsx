import { useState } from 'react';
import sentences from './data/sentences';
import Sentence from './Sentence';
import './App.css';

export default function App() {
  const [index, setIndex] = useState(0)
  const sentence = sentences[index]

  return (
    <div className="App">
      {index < sentences.length ? (
        <>
          <Sentence en={sentence.en} ja={sentence.ja} />
          <button className="btn btn-primary" onClick={() => setIndex(index + 1)}>Next</button>
        </>
      ) : (
        <>
          <p>Done!</p>
          <button className="btn btn-primary" onClick={() => setIndex(0)}>Retry</button>
        </>
      )}
    </div>
  )
}
