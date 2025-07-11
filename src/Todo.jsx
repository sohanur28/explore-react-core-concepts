// export default function Todo({task, isDone}){

//     return (
//         <li>Task: {task}</li>
//     )
// }

// conditional rendering option 1:
// export default function Todo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Work on: {task}</li>;
//   }
// }

// conditional rendering option 2
// export default function Todo({task, isDone}){

//     if(isDone){
//         return <li>Finished: {task}</li>;
//     }
//     return <li>Work on: {task}</li>;

// }

// condititonal rendering option 3: ternary 
// export default function Todo({task, isDone}){

//     return (
//         <li> {isDone ? 'Finished': 'Work on' } : {task}</li>
//     )
// }

// conditional rendering option 4: &&
// export default function Todo({task, isDone}){

//     return (
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }

// conditional rendering option 5: || (or)
// export default function Todo({task, isDone}){

//     return (
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }

// conditional rendering option 6: 
export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
        return <li>Finished: {task}</li>;
    }
    else{
        listItem = <li>Work on: {task}</li>;
    }
    return listItem;
}