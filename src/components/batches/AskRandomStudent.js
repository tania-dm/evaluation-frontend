import React, { PureComponent } from 'react'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import { connect } from 'react-redux'

class AskRandomStudent extends PureComponent {
  componentWillMount() {
    this.setState({
      open: false
    })
  }

  openDialog = () => {
    this.setState({
      open: true
    })
  }

  closeDialog = () => {
    this.setState({
      open: false
    })
  }
  render() {
    let student = this.props.students[Math.floor(Math.random()*this.props.students.length)];
    if(!student) {
      student = {}
    }
    return (
      <div>
        <FlatButton
          label="Ask a question"
          primary={true}
          onClick={this.openDialog} />
        <Dialog
          title="Ask a question"
          open={this.state.open}
          modal={false}
          onRequestClose={this.handleClose}
        >
          Aloha, <strong>Mr. Teacher!</strong> Next question goes to:
          {student.name}
          <br />
          <img className="picture" src={student.photo} alt="no picture available" />
          <br />

          <FlatButton
            label="Done"
            primary={true}
            onClick={this.closeDialog} />
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => {
  return {
    students
  }
}

export default connect(mapStateToProps)(AskRandomStudent)
