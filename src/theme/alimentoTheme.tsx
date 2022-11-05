import { StyleSheet } from "react-native";

export const alimentoTheme = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:100,
        justifyContent:"center",
    },
    title:{
        color: "#009688",
        fontSize:40,
        fontWeight: "bold",

    },
    label:{
        color:"#009688",
        fontWeight:"bold"
    },
    inputField:{
        color:"#009688",
        fontSize:18,
    },
    inputFieldIOS:{
        borderBottomColor:"#009688",
        borderBottomWidth:2,
        paddingBottom:5
    },
    buttonContainer:{
        alignItems:"center",
        marginTop:50
    },
    buttonLogOutContainer:{
        alignItems:"flex-start",
        marginTop:50
    },
    button:{
        borderWidth: 3,
        borderColor: "#009688",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 100
    },
    buttonLogOut:{
        borderWidth: 4,
        borderColor: "#009688",
        paddingHorizontal: 30,
        paddingVertical: 5,
        // borderRadius: 100
    },
    buttonText:{
        fontSize:18,
        color:"#009688"
    },
    newUserContainer:{
        alignItems:"flex-end",
        marginTop:10
    }
});