import React, { Component } from 'react'
import loading from './Spinner-1s-200px-3.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <img src={loading} alt="loading"></img>
      </div>
    )
  }
}
