import { createSlice  } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";


const initialState = {
    todos:[],
}
const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducer :{
        addtodo :(state,action)=>{
            state.todos.push(action.payload)
        },
        removetodo : (state,action)=>{
            state.todos = state.todos.filter(todo => todo.id != action.payload)
        },

    },
});

export const {addtodo, removetodo} = todoSlice.actions
export default todoSlice.reducer;



reducers:{
    addtodo:(state,action)=>{
        state.todos.push(action.payload)
    }
    removetodo:(state,action) =>{
        state.todos = todos.filter(todo =>todo.id != action.payload)
    }

}



const todos = useSelector(state => state.todos.todos);

const dispatch = useDispatch()


