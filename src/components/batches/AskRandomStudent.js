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

    // let student = this.props.students[Math.floor(Math.random()*this.props.students.length)];
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
          <img className="picture" src={student.photo} alt="student" />
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
