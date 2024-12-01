import { createContext, useContext } from "react";

export const TodoContext = createContext({
Todos : [{
    id : 1,
    Todo : "Todo msg",
    Completed : false
}],
addTodo : (Todo) =>{},
updateTodo : (Todo , id ) =>{},
deleteTodo : (id) =>{},
toggleComplete : (id) =>{}
})


export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider
