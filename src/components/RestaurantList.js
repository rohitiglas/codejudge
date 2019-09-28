import React, { Component } from 'react';

import { StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image, Alert, YellowBox } from 'react-native';
import SearchBar from "./Searchbar";
import {connect} from 'react-redux';
import {filterRestaurant, getRestaurantData} from "../actions/MyAction";
import styles from './styles';
import Geolocation from "@react-native-community/geolocation";



class RestaurantList extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isLoading: true

        }



    }







    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }



    componentDidMount(){

       Geolocation.getCurrentPosition(
            position => {
                const location = JSON.stringify(position);

                console.log("Current Position ",position.coords)

                this.props.getRestaurantData(position.coords.latitude,position.coords.longitude);
            },
            error => {
                console.log("Current Position ",error);
                Alert.alert(error.message)
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );






        // this.webCall();

        // this.props.getRestaurantData();

    }

    componentDidUpdate(prevProps)
    {


        const { isSignup, navigation } = this.props

        if(!prevProps.isSignup && isSignup)
        {
            this.setState({isLoading:false})
        }

    }

    onChange=(data)=>{
        console.log("HSHSHHSHDataROOROR",data)


        this.props.getFilterRestaurantData(data);

    }

    render() {
        console.disableYellowBox=true;


        if (this.state.isLoading) {
            return (

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                    <ActivityIndicator size="large" />

                </View>

            );

        }


        return (

            <View style={styles.MainContainer}>

                <SearchBar
                    onTermChange={this.onChange}
                    onTermSubmit={() => this.onChange}
                />





                <FlatList

                    data={ this.props.registerData }

                    ItemSeparatorComponent = {this.FlatListItemSeparator}

                    renderItem={({item}) =>

                        <View style={{flex:1, flexDirection: 'row'}}>

                            <Image source = {{ uri: item.icon}} style={styles.imageView} />





                            <View>

                                <Text style={styles.textView} >{item.name}</Text>


                                <Text  style={styles.restoType} >{item.types.join(' , ')}</Text>
                            </View>
                            {item.rating && <Text  style={styles.rating} >{item.rating}</Text>}
                            {!item.rating && <Text  style={styles.rating} >{0}</Text>}




                        </View>

                    }

                    keyExtractor={(item, index) => index.toString()}

                />

            </View>
        );
    }
}




const mapStateToProps = (state) =>{
    console.log("Given State",state.registerData)

    return {
        isSignup:state.isSignup,
        error:state.error,
        isFetching:state.isFetching,
        registerData:state.registerData

    }
}
const mapDispatchToProps = (dispatch)=>{
    return{

        getRestaurantData: (lat,long)=>dispatch(getRestaurantData(lat,long)),
        getFilterRestaurantData: (data)=>dispatch(filterRestaurant(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);