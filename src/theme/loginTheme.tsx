import { StyleSheet } from "react-native";

export const loginTheme = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:30,
        justifyContent:"center",
        height:600,
        marginBottom:50

    },
    title:{
        color: "white",
        fontSize:30,
        fontWeight: "bold",
        marginTop: 40,
    },
    label:{
        marginTop:30,
        color:"white",
        fontWeight:"bold"
    },
    inputField:{
        color:"white",
        fontSize:20,
    },
    inputFieldIOS:{
        borderBottomColor:"white",
        borderBottomWidth:2,
        paddingBottom:5
    },
    buttonContainer:{
        alignItems:"center",
        marginTop:50
    },
    button:{
        borderWidth: 3,
        borderColor: "white",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 100
    },
    buttonText:{
        fontSize:18,
        color:"white"
    },
    newUserContainer:{
        alignItems:"flex-end",
        marginTop:10
    }
});