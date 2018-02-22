// src/components/evaluations/EvaluationEditor.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import createEvaluation from '../../actions/evaluations/create'
import './EvaluationEditor.css'


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
    this.setState({
      color: this.refs.color.value
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

        <div className="form-group">
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
        </div>

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

export default connect(null, { createEvaluation })(EvaluationEditor)
