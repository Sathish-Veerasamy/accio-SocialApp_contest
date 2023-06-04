import { FETCH_REQUEST_START,FETCH_REQUEST_SUCCESS,FETCH_REQUEST_FAIL } from "../actions/actionTypes";


const initialState={
    loading:false,
    data:[],
    error:''
}


export const dataReducer =(state=initialState,action) =>{
    
    switch(action.type){
            case FETCH_REQUEST_START: return ({
                ...state,loading:true
            })

            case FETCH_REQUEST_SUCCESS: return({
                ...state,loading:false,data:action.payload,error:''
            })
            case FETCH_REQUEST_FAIL: return({
                ...state,loading:false,data:[],error:action.payload
            })
            
            default: return state
    }
}

