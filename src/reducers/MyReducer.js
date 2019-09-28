import {LIST_PENDING,LIST_ERROR,LIST_SUCCESS} from "../actions/MyAction";

const initialState ={

    listData :[],
    isSignup:false,
    isFetching : false,
    error : false
}

// Reducer are pure function, it will return modified copy of the state.
export default function AuthReducer (state = initialState, action){

    switch(action.type){

        case LIST_PENDING:
            return{
                ...state,
                isSignup:false,
                listData: [],
                isFetching : true,
                error : false
            }
        case LIST_SUCCESS:
            return{
                ...state,
                isSignup:true,
                listData: action.data.data.results,
                isFetching : false,
                error : false
            }
        case LIST_ERROR:
            return{
                ...state,
                isSignup:false,
                listData: [],
                isFetching : false,
                error : true
            }


        default:
            return state
    }
}
