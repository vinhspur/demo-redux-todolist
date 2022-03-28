/**
 * hàm trả về mảng todo mới sau khi filter status
 */
const functionCheckStatus = (checkStatus, state) => {
    if (checkStatus === "All") {
        let item = state.todoList.filter((item) => {
            return item;
        });
        return item;
    }
    if (checkStatus === "Completed") {
        let item = state.todoList.filter((item) => {
            return item.completed === true;
        });
        return item;
    }
    if (checkStatus === "Todo") {
        let item = state.todoList.filter((item) => {
            return item.completed === false;
        });
        return item;
    }
};
const filterStatus = (state) => {
    if (state.filters.status !== "All") {
        let checkStatus = state.filters.status;
        return functionCheckStatus(checkStatus, state);
    } else {
        return state.todoList;
    }
}
const filterSearch = (state) => {
    let item = state.todoList.filter((item) => {
        return item.name.includes(state.filters.search);
    });
    return item;
}
const filterPriority = (state) => {
    if (state.filters.priority.length == 0) {
        return state.todoList;
    } else {
        let item = state.todoList.filter((item) => {
            return state.filters.priority.includes(item.priority);
        });
        return item;
    }
}
const resultListTodo = (a, b) => {
    var c = []
    a.forEach((itemA) => {
        b.forEach((itemB) => {
            if (itemB === itemA) {
                c.push(itemB)
            }
        })
    })
    return c
}

export const todoInput = (state) => {
    debugger
    // trường hợp filter theo 3 tiêu chí search , status , priority
    if (state.filters.search && state.filters.status && state.filters.priority) {
        let dataSearch = filterSearch(state)
        let dataStatus = filterStatus(state)
        let dataPriority = filterPriority(state)
        let dataSearchAndStatus = resultListTodo(dataSearch, dataStatus)
        return resultListTodo(dataSearchAndStatus, dataPriority)
    }
    // trường hợp filter theo 2 tiêu chí search , status
    else if (state.filters.search && state.filters.status !== "All") {
        let dataSearch = filterSearch(state)
        let dataStatus = filterStatus(state)
        return resultListTodo(dataSearch, dataStatus)
    }
    // trường hợp filter theo 2 tiêu chí priority , status
    else if (state.filters.status && state.filters.priority) {
        let dataPriority = filterPriority(state)
        let dataStatus = filterStatus(state)
        return resultListTodo(dataPriority, dataStatus)
    }
    // trường hợp filter theo 2 tiêu chí priority , search
    else if (state.filters.search && state.filters.priority) {
        let dataPriority = filterPriority(state)
        let dataSearch = filterStatus(state)
        return resultListTodo(dataPriority, dataSearch)
    }
    // trường hợp filter theo 1 tiêu chí search
    else if (state.filters.search) {
        return filterSearch(state)
    }
    // trường hợp filter theo 1 tiêu chí priority
    else if (state.filters.priority) {
        return filterPriority(state)
    }
    // trường hợp filter theo 1 tiêu chí status
    else if (state.filters.status) {
        return filterStatus(state)
    }
    return state.todoList;
};