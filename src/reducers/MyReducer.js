import {SIGNUP_PENDING,SIGNUP_ERROR,SIGNUP_SUCCESS} from "../actions/MyAction";

const initialState ={

    registerData :[],
    isSignup:false,
    isFetching : false,
    error : false
}

// Reducer are pure function, it will return modified copy of the state.
export default function AuthReducer (state = initialState, action){
    console.log("KSKKSKSKKSKSKS",action)
    switch(action.type){

        case SIGNUP_PENDING:
            return{
                ...state,
                isSignup:false,
                registerData: [],
                isFetching : true,
                error : false
            }
        case SIGNUP_SUCCESS:
            return{
                ...state,
                isSignup:true,
                registerData: action.data.data.results,
                isFetching : false,
                error : false
            }
        case SIGNUP_ERROR:
            return{
                ...state,
                isSignup:false,
                registerData: [],
                isFetching : false,
                error : true
            }


        default:
            return state
    }
}
