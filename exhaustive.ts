const counterReducer = (state: CounterState = { count: 0 }, action: CounterAction): CounterState => {
  switch (action.type) {
    case CounterActionType.Increment: 
      return {
        count: state.count + 1
      }
    case CounterActionType.Decrement: 
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
}
