import {Platform, StyleSheet} from "react-native";

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

export default styles;