export const initState = {
  age: 12, 
  year: '2022'
}


export const reducer = function (state, action) {

  // state: 上一次的state
  switch (action.type) {
    case 'increase':
      return Object.assign({}, state, { age: state.age + action.val });
    case 'decrease':
      return Object.assign({}, state, { age: state.age - 1 })
      case 'increaseYear':
      return Object.assign({}, state, { year: state.year + 1 });
      case 'decreaseYear':
      return Object.assign({}, state, { year: state.year - 1 });
    default:
      throw new Error()

  }
}