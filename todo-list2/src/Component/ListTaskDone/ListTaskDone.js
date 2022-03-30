import React, { Component } from 'react'
import './ListTaskDone.css'

class ListTaskDone extends Component {
  
  constructor(props) {
    super(props)
    this.handleChange= this.handleChange.bind(this)
  }

  handleChange(){
      this.props.toggleTaskDone(this.props.id)
  }

  render() {
    return (
      <div>
        <label className='list'>
          <p className='taskList'><input className='checkbox' type='checkbox'  checked={this.props.complete} onChange={this.handleChange} id='checkbox'/>{this.props.task}</p>
        </label>
      </div>
    )
  }
}

export default ListTaskDone