import { useState } from 'react';

export default function App() {
  const en = 'this is a pen';
  const ja = 'これはペンです';

  const [show, setShow] = useState(false)

  return (
    <div>
      <p>{en}</p>
      <button onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>
      {show && <p>{ja}</p>}
    </div>
  );
}
