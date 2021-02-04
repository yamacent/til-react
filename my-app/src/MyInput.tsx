import React, { ChangeEvent } from 'react'

export default class MyInput extends React.Component<{}, { value: string }> {
  constructor(props: {}) {
    super(props)
    this.state = { value: 'hello' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
        {this.state.value}
      </div>

    )
  }
}
