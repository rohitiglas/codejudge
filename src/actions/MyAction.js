// Sign up
import {Alert} from "react-native";

export const SIGNUP_PENDING = 'SIGNUP_PENDING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
import axios from 'axios';

let apiKey='Enter your google place api key';



function signupPending(msg) {
    return {
        type: SIGNUP_PENDING,
        message: msg
    };
}

function signupSuccess(data) {
    return {
        type: SIGNUP_SUCCESS,
        data
    };
}

function signupError(signupError) {
    return {
        type: SIGNUP_ERROR,
        signupError
    }
}


//signup
export function getRestaurantData(lat,long){


    return dispatch => {
        dispatch(signupPending())
        let url =  'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+','+long+'&radius=2500&type=restaurant&key='+apiKey;
        axios.get(url)
            .then(res => {
                dispatch(signupSuccess(res))
            }).catch(err=>{
            dispatch(signupError(err))
        })
    };
}

export function filterRestaurant(data){


    return dispatch => {
        dispatch(signupPending())
        let url =  'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=28.4595,77.0266&radius=2500&type=restaurant&keyword='+data+'&key='+apiKey;
        axios.get(url)
            .then(res => {
                dispatch(signupSuccess(res))
            }).catch(err=>{
            dispatch(signupError(err))
        })
    };
}