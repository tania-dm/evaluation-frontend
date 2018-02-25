import React, { PureComponent } from 'react'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import { connect } from 'react-redux'

class AskRandomStudent extends PureComponent {
  componentWillMount() {
    this.setState({
      student: {},
      open: false
    })
  }

  openDialog = () => {
    let colorsArray = []
    for (let i=0; i<49; i++) {
      colorsArray.push("red")
    }
    for (let i=0; i<33; i++) {
      colorsArray.push("yellow")
    }
    for (let i=0; i<18; i++) {
      colorsArray.push("green")
    }

    let randColor = colorsArray[Math.floor(Math.random()*colorsArray.length)]

    let redStudents = this.props.students.filter(student => student.color === "red")
    let yellowStudents = this.props.students.filter(student => student.color === "yellow")
    let greenStudents = this.props.students.filter(student => student.color === "green")

    let student;
    if (randColor === "red") {
      student = redStudents[Math.floor(Math.random()*redStudents.length)]
    } else if (randColor === "yellow") {
      student = yellowStudents[Math.floor(Math.random()*yellowStudents.length)]
    } else if (randColor === "green") {
      student = greenStudents[Math.floor(Math.random()*greenStudents.length)]
    }

    this.setState({
      student,
      open: true
    })
  }

  closeDialog = () => {
    this.setState({
      open: false
    })
  }
  render() {
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
          {this.state.student.name}
          <br />
          <img className="picture" src={this.state.student.photo} alt="student" />
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
