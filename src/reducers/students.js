// src/reducers/students.js
import { FETCHED_STUDENTS, FETCHED_ONE_STUDENT } from '../actions/students/fetch'
import {
  STUDENT_CREATED,
  STUDENT_UPDATED,
  STUDENT_REMOVED
} from '../actions/students/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_STUDENTS :
      return [ ...payload ]

    case FETCHED_ONE_STUDENT :
      const studentIds = state.map(student => student._id)
      if (studentIds.indexOf(payload._id) < 0) {
        return [{ ...payload }].concat(state)
      }
      return state.map((student) => {
        if (student._id === payload._id) {
          return { ...payload }
        }
        return student
      })

    case STUDENT_CREATED :
      const newStudent= { ...payload }
      return [newStudent].concat(state)

    case STUDENT_UPDATED :
      return state.map((student) => {
        if (student._id === payload._id) {
          return { ...payload }
        }
        return student
      })

    case STUDENT_REMOVED :
    return state.filter((student) => (student._id !== payload._id))

    default :
      return state

  }
}
