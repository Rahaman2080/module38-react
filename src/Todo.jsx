// conditional rendering 1 : if else with ===

// export default function Todo({task, isDone}){
//     if(isDone===true){
//      return <li>Task finished: {task}</li>
//     } 
//     else{
//         return <li>Work on: {task}</li>
//     } 
//  }

// conditional rendering 2 : if condition without else and set only (object)
// export default function Todo({task, isDone}){

//    if(isDone){
//     return <li>Task finished: {task}</li>
//    } 
//      return <li>Work on: {task}</li>
// }

// conditional rendering 3: ternary operator
// export default function Todo({task, isDone}){
//      return(
//         <li>{isDone? "Task finished": "Work on" } :{task}</li>
//      )  
//  }

// conditional rendering 4 : && operator
// export default function Todo({task, isDone}){
//          return(
//             <li>{task}: {isDone && 'Done' || !isDone && 'not done'}</li>
//          )  
//      }

// conditional rendering 5 : || operator
// export default function Todo({task, isDone}){
//     return(
//        <li>{task}: {isDone || 'not done'}</li>
//     )  
// }

// conditional rendering 6 : with variabl
export default function Todo({task, isDone}){
    let listItem;
   if(isDone){
    listItem= <li>Task finished: {task}</li>
   } 
   else{
    listItem = <li>Work on: {task}</li>
   }
     return listItem;
}