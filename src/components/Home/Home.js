import React, { Component } from 'react'
import axios from 'axios'

import SubjectBox from '../SubjectBox/SubjectBox'
import './Home.css'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      subjects: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3001/subjects')
      .then(subjects => {
        console.log(subjects.data)
        this.setState({
          subjects: subjects.data
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    let subjectBoxes = this.state.subjects.map((subject, i) => {
      return <SubjectBox info={subject} key={i} />
    })
    return (
      <div className="subjects">
        {subjectBoxes}
      </div>
    )
  }
}

export default Home