// Sign up
import {Alert} from "react-native";

export const LIST_PENDING = 'LIST_PENDING';
export const LIST_SUCCESS = 'LIST_SUCCESS';
export const LIST_ERROR = 'LIST_ERROR';
import axios from 'axios';

let apiKey='';



function listPending(msg) {
    return {
        type: LIST_PENDING,
        message: msg
    };
}

function listSuccess(data) {
    return {
        type: LIST_SUCCESS,
        data
    };
}

function listError(listError) {
    return {
        type: LIST_ERROR,
        listError
    }
}


//signup
export function getRestaurantData(lat,long){


    return dispatch => {
        dispatch(listPending())
        let url =  'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+','+long+'&radius=2500&type=restaurant&key='+apiKey;
        axios.get(url)
            .then(res => {
                dispatch(listSuccess(res))
            }).catch(err=>{
            dispatch(listError(err))
        })
    };
}

export function filterRestaurant(data){


    return dispatch => {
        dispatch(listPending())
        let url =  'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=28.4595,77.0266&radius=2500&type=restaurant&keyword='+data+'&key='+apiKey;
        axios.get(url)
            .then(res => {
                dispatch(listSuccess(res))
            }).catch(err=>{
            dispatch(listError(err))
        })
    };
}