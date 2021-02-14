import { useEffect, useState } from "react";

export default function Hook() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('effect')
  })

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
