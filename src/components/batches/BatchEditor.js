// src/components/batches/BatchEditor.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import BatchIcon from 'material-ui/svg-icons/device/storage'
import createBatch from '../../actions/batches/create'
import './BatchEditor.css'


class BatchEditor extends PureComponent {
  constructor(props) {
    super()

    const { number, start, end } = props

    this.state = {
      number,
      start,
      end
    }
  }

  updateNumber(event) {
    this.setState({
      number: this.refs.number.value
    })
  }

  updateStart(event) {
    this.setState({
      start: this.refs.start.value
    })
  }

  updateEnd(event) {
    this.setState({
      end: this.refs.end.value
    })
  }

  saveBatch() {
    const {
      number,
      start,
      end
    } = this.state

    const batch = {
      number,
      startDate: start,
      endDate: end
    }

    console.log(batch)
    this.props.createBatch(batch)
  }

  render() {
    return (
      <div className="add-batch">
        <div className="form-group">
          <label>Batch Number</label>
          <br />
          <input
            type="text"
            ref="number"
            className="Batch"
            placeholder="eg: 3"
            defaultValue={this.state.number}
            onChange={this.updateNumber.bind(this)}
            onKeyDown={this.updateNumber.bind(this)} />
        </div>

        <div className="form-group">
          <label>Start Date</label>
          <br />
          <input
            type="text"
            ref="start"
            className="start"
            placeholder="eg: 2018-02-28"
            defaultValue={this.state.start}
            onChange={this.updateStart.bind(this)}
            onKeyDown={this.updateStart.bind(this)} />
        </div>

        <div className="form-group">
          <label>End Date</label>
          <br />
            <input
              type="text"
              ref="end"
              className="end"
              placeholder="eg: 2018-03-28"
              defaultValue={this.state.start}
              onChange={this.updateEnd.bind(this)}
              onKeyDown={this.updateEnd.bind(this)} />
        </div>

        <div className="actions">
          <RaisedButton
            label="Create Class"
            primary={true}
            onClick={this.saveBatch.bind(this)}
            icon={<BatchIcon />} />
        </div>
      </div>
    )
  }
}

export default connect(null, { createBatch })(BatchEditor)
