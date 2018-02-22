// src/reducers/evaluations.js
import { FETCHED_EVALUATIONS, FETCHED_ONE_EVALUATION } from '../actions/evaluations/fetch'
import {
  EVALUATION_CREATED,
  EVALUATION_UPDATED
} from '../actions/evaluations/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_EVALUATIONS :
      return [ ...payload ]

    case FETCHED_ONE_EVALUATION :
      const evaluationIds = state.map(evaluation => evaluation._id)
      if (evaluationIds.indexOf(payload._id) < 0) {
        return [{ ...payload }].concat(state)
      }
      return state.map((evaluation) => {
        if (evaluation._id === payload._id) {
          return { ...payload }
        }
        return evaluation
      })

    case EVALUATION_CREATED :
      const newEvaluation= { ...payload }
      return [newEvaluation].concat(state)

    case EVALUATION_UPDATED :
      return state.map((evaluation) => {
        if (evaluation._id === payload._id) {
          return { ...payload }
        }
        return evaluation
      })

    default :
      return state

  }
}
