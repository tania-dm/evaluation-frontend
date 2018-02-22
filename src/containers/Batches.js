// src/containers/Batches.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchBatches from '../actions/batches/fetch'
import { connect as subscribeToWebsocket } from '../actions/websocket'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import './Batches.css'
import BatchEditor from '../components/batches/BatchEditor'

class Batches extends PureComponent {
  componentWillMount() {
    const { batchId } = this.props.match.params
    this.props.fetchBatches(batchId)
    this.props.subscribeToWebsocket()
  }

  goToBatch = batchId => event => this.props.push(`/batch/${batchId}`)


  renderBatch = (batch, index) => {
    let startDate = batch.startDate.substr(0,10)
    let endDate = batch.endDate.substr(0,10)
    let title = `Batch #${batch.number} (${startDate} / ${endDate})`
    return (
      <MenuItem
        key={index}
        onClick={this.goToBatch(batch._id)}
        primaryText={title} />
    )
  }

  render() {
    return (
      <div className="Batches">
        <h1 className="Header">Classes</h1>
        <Paper className="paper">
          <BatchEditor />
          <br />
          <Menu>
            { this.props.batches.map(this.renderBatch)}
          </Menu>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ batches, currentUser }) => ({ batches, currentUser })

export default connect(mapStateToProps, { fetchBatches, subscribeToWebsocket, push })(Batches)
