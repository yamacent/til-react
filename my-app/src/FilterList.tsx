import React, { ChangeEvent } from 'react';

const data = [
  'foo',
  'bar',
  'baz'
]

export default class FilterList extends React.Component<{}, { filter: string }> {
  constructor(props: {}) {
    super(props)
    this.state = { filter: '' }
    this.setFilter = this.setFilter.bind(this)
  }

  setFilter(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ filter: e.target.value })
  }

  isMatch(s: string): boolean {
    return s.includes(this.state.filter)
  }

  render() {
    const filteredData = data.filter(d => this.isMatch(d))
    return (
      <div>
        <input type="text" value={this.state.filter} onChange={this.setFilter} />
        {filteredData.length ?
          <ul>
            {filteredData.map(d => <li key={d}>{d}</li>)}
          </ul>
        : <p>empty</p>}
      </div>
    )
  }
}
