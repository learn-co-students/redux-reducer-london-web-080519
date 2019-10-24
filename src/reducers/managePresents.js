// export function managePresents(state, action){
//     console.log(state)
//     switch (action.type) {
//         case 'INCREASE':
//             return { numberOfPresents: 1 }
//         default: 
//             return state;
//     }
// }

export function managePresents(state, action){
   // console.log(state)
    switch (action.type) {
        case 'INCREASE':
            return { numberOfPresents: state.numberOfPresents + 1 }
        default: 
            return state;
    }
}