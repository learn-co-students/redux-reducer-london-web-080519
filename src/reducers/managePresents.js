export function managePresents(state, action){
}

// state = {
//     numberOfPresents: 0
// }

managePresents = (state, action) => {

switch (action.type) {
    case  'INCREASE':
        return {numberOfPresents: state.numberOfPresents + 1}
        default:
            return {numberOfPresents: state.numberOfPresents}
}


}


// function reducer(state, action){      
//     switch (action.type) {
//       case 'INCREASE_COUNT':
//         return {count: state.count + 1}
//       case 'DECREASE_COUNT':
//         return {count: state.count - 1}
//       default:
//         return 
//     }
//   }
  