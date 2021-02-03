import React from 'react'

export default class MyStatefullComponent extends React.Component<{}, { time: Date }> {
  constructor(props: {}) {
    super(props)
    this.state = { time: new Date() }
  }
  render () {
    return (
      <div>it's {`${this.state.time}`}</div>
    )
  }
}
