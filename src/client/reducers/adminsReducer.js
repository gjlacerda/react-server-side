import {FETCH_ADMINS} from 'client/actions'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ADMINS:
      return action.payload.data
    default:
      return state
  }
}