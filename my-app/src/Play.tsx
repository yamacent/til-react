import { useState } from 'react';
import { Link } from 'react-router-dom';
import sentences from './data/sentences';
import Sentence from './Sentence';

export default function Play() {
  const [index, setIndex] = useState(0)
  const sentence = sentences[index]

  return (
    <div className="Play">
      {index < sentences.length ? (
        <>
          <Sentence en={sentence.en} ja={sentence.ja} />
          <button className="btn btn-primary" onClick={() => setIndex(index + 1)}>Next</button>
        </>
      ) : (
        <>
          <div className="alert alert-info">Done!</div>
          <Link to="/" className="btn btn-primary" onClick={() => setIndex(0)}>Back to home</Link>
        </>
      )}
    </div>
  )
}
