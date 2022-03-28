export const addTodo =(data)=>{
return {
    type:'todoList/addTodo',
    payload:data
}
}

export const searchText =(data)=>{
    return {
        type:'todoList/searchText',
        payload:data
    }
    }
    export const toggleTodoStatus =(idTodo)=>{
        return {
            type:'todoList/toggleTodoStatus',
            payload:idTodo
        }
        }
    export const changeOption =(data)=>{
        return {
            type:'todoList/changeOption',
            payload:data
        }
        }
export const searchStatus =(data)=>{
        return {
            type:'todoList/searchStatus',
            payload:data
        }
        }
        export const checkboxTodo =(data)=>{
            return {
                type:'todoList/checkboxTodo',
                payload:data
            }
            }