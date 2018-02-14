import { combineReducers } from 'redux'
// import { ACTION_TYPE } from '../actions/actions'

function reducer (state={}, action) {
  // const { } = action

  switch (action.type) {
    // case :
    //   return {
    //     ...state,

    //   }
    default:
      return state
  }

}

const rootReducer = combineReducers({
  reducer,
})

export default rootReducer