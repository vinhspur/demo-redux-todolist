const initState = {
    filters: {
        search: "",
        status: "All",
        priority: '',
    },
    todoList: [
        { id: 1, name: "Chơi thể thao", completed: true, priority: "Medium" },
        { id: 2, name: "Học redux", completed: false, priority: "Medium" },
        { id: 3, name: "Chơi game", completed: false, priority: "Medium" },
    ],
};
const rootReducer = (state = initState, action) => {
    console.log(state)
    switch (action.type) {
        case "todoList/addTodo":
            {
                return {
                    ...state,
                    todoList: [
                        ...state.todoList,
                        action.payload
                    ],
                };
            }
        case "todoList/searchText":
            {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        search: action.payload
                    }
                };
            }
        case "todoList/searchStatus":
            {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        status: action.payload
                    }
                };
            }
        case "todoList/changeOption":
            {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        priority: action.payload
                    }
                };
            }
        case "todoList/toggleTodoStatus":
            {
                return {
                    ...state,
                    todoList: [...state.todoList.map((item) => {
                        return item.id === action.payload ? {...item, completed: !item.completed } : item
                    })]
                };
            }

        default:
            return state;
    }
};
export default rootReducer;