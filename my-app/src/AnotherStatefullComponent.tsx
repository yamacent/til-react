import { useState } from "react"

const AnotherStatefullComponent = () => {
  const [time, setTime] = useState(new Date())
  return (
    <div>it's another {`${time}`}</div>
  )
}

export default AnotherStatefullComponent
