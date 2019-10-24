export function manageFriends(state = { friends: [] }, action) {
  if (action.type === "ADD_FRIEND") {
    let newState = { ...state, friends: state.friends.push(action.friend) }
  }
  if (action.type === "REMOVE_FRIEND") {
    let newState = {
      ...state,
      friends: state.friends.filter(friend => friend.id !== action.id)
    }
    return newState
  }
  return state
}
