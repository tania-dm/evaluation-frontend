// src/components/evaluations/EvaluationEditor.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import RaisedButton from 'material-ui/RaisedButton'
import createEvaluation from '../../actions/evaluations/create'
import './EvaluationEditor.css'

const TYPES = [
  'red',
  'yellow',
  'green'
]

class EvaluationEditor extends PureComponent {
  constructor(props) {
    super()

    const { date, color, remark } = props

    this.state = {
      date,
      color,
      remark
    }
  }

  updateDate(event) {
    this.setState({
      date: this.refs.date.value
    })
  }

  updateColor(event) {
    let color;
    switch (event.target.value) {
      case 'red':
        color = 'red'
        break;
      case 'yellow':
        color = 'yellow'
        break;
      case 'green':
        color = 'green'
        break;
      default:
        color = 'red'
    }
    this.setState({
      color
    })
  }

  updateRemark(event) {
    this.setState({
      remark: this.refs.remark.value
    })
  }

  saveEvaluation() {
    const {
      date,
      color,
      remark
    } = this.state

    const evaluation = {
      date,
      color,
      remark,
      studentId: this.props.studentId
    }

    this.props.createEvaluation(evaluation)
    this.props.push(`/batch/${this.props.batchId}`)

  }

  render() {
    return (
      <div className="add-evaluation">
        <div className="form-group">
          <label>Daily Evaluation for: </label>
          <br />
          <input
            type="date"
            ref="date"
            className="Date"
            placeholder="eg: 2018-03-20"
            defaultValue={this.state.Date}
            onChange={this.updateDate.bind(this)}
            onKeyDown={this.updateDate.bind(this)} />
        </div>

      {/*  <div className="form-group">
          <label>Color</label>
          <br />
          <input
            type="text"
            ref="color"
            className="color"
            placeholder="eg: red"
            defaultValue={this.state.color}
            onChange={this.updateColor.bind(this)}
            onKeyDown={this.updateColor.bind(this)} />
        </div> */}

        {TYPES.map((type) => {
          return <label key={type} htmlFor={type}>
            <input id={type} type="radio" name="type" value={type} onChange={this.updateColor.bind(this)} />
            {type}
          </label>
        })}

        <div className="form-group">
          <label>Remarks</label>
          <br />
          <input
            type="text"
            ref="remark"
            className="remark"
            placeholder="eg: insert remarks here"
            defaultValue={this.state.remark}
            onChange={this.updateRemark.bind(this)}
            onKeyDown={this.updateRemark.bind(this)} />
        </div>

        <div className="actions">
          <RaisedButton
            label="Save"
            primary={true}
            onClick={this.saveEvaluation.bind(this)}
             />
           <RaisedButton
             label="Save & Next"
             primary={true}

              />
        </div>
      </div>
    )
  }
}

export default connect(null, { createEvaluation, push })(EvaluationEditor)
