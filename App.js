import React, { Component } from 'react';

import { StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image, Alert, YellowBox } from 'react-native';
import SearchBar from "./src/components/Searchbar";

export default class Project extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isLoading: true

        }

        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);

    }

    GetItem (flower_name) {

        Alert.alert(flower_name);

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

    webCall=()=>{

        return fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=28.4595,77.0266&radius=2500&type=restaurant&key=AIzaSyDR6AAtjfcXkcPw_E5-5DaHPJG-GFRlNno')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.results
                }, function() {
                    // In this block you can do something with new state.
                });
            })
            .catch((error) => {
                console.error(error);
            });

    }

    componentDidMount(){

        this.webCall();

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

                <SearchBar/>



                <FlatList

                    data={ this.state.dataSource }

                    ItemSeparatorComponent = {this.FlatListItemSeparator}

                    renderItem={({item}) =>

                        <View style={{flex:1, flexDirection: 'row'}}>

                            <Image source = {{ uri: item.icon}} style={styles.imageView} />





                            <View>

                            <Text onPress={this.GetItem.bind(this, item.flower_name)} style={styles.textView} >{item.name}</Text>


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

const styles = StyleSheet.create({

    MainContainer :{

        justifyContent: 'center',
        flex:1,
        margin: 5,
        marginTop: (Platform.OS === 'ios') ? 20 : 0,

    },

    imageView: {

        width: 100,
        height: 70 ,
        margin: 7,
        borderRadius : 7

    },

    textView: {
        fontSize:14,
        fontWeight:'bold',

        width:'50%',
        color: '#1e1e1e'

    },
    restoType: {
        fontSize:12,
        width:'50%',
        color: '#bdbdbd'

    },
    rating: {
        top:10,
        right:10,
        position:'absolute',
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:5,
        width:35,
        height:35,
        borderWidth:1,
        borderColor:'#0f670a',
        backgroundColor:'#0f670a',
        fontSize:15,
        fontWeight:'bold',


        color: '#FFFFFF'

    }

});