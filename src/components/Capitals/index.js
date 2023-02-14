import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selected: countryAndCapitalsList[0].id}

  changed = event => {
    this.setState({selected: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {selected} = this.state
    console.log(selected)
    const result = countryAndCapitalsList.filter(each => each.id === selected)
    const x = result[0].country
    console.log(x)

    return (
      <div className="bg">
        <div className="card">
          <h1>Countries And Capitals</h1>
          <select name="city" id="box" onChange={this.changed}>
            {countryAndCapitalsList.map(each => (
              <option key={each.id} value={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="box">is capital of which country</label>
          <h1>{x}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
