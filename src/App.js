import React, { Component } from 'react';
import {Provider, connect} from 'react-redux';
import store from './store';
import Navigation from "./components/RestaurantList";



export default class App extends Component
{
    render()
    {
        return(
            <Provider store = {store}>
                <Navigation/>
            </Provider>
        )
    }
}