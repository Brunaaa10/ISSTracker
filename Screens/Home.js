import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, StatusBar, ImageBackground, Platform, SafeAreaView } from "react-native"
import ISSLOcation from "./ISSLocation";

const bgImg = require("../Iss-assets/bg_image.png");
const meteorsIcon = require("../Iss-assets/meteor_icon.png");
const issIcon = require("../Iss-assets/iss_icon.png");
const rocketIcon = require("../Iss-assets/rocket_icon.png")

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}></SafeAreaView>
                <ImageBackground source={bgImg} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>ISS Tracker</Text>
                    </View>

                    {/* <View> */}
                    <TouchableOpacity style={styles.routeCards} onPress ={()=> this.props.navigation.navigate ('ISSLocation')} >
                        <Image source={issIcon} style={styles.iconImage}></Image>
                        <Text style={styles.routeText}>Localização da ISS</Text>
                        <Text style={styles.knowMore}>Saiba mais</Text>
                        <Text style={styles.bgDigit}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCards}  onPress ={()=> this.props.navigation.navigate ('Meteors')}>
                        <Image source={meteorsIcon} style={styles.iconImage}></Image>
                        <Text style={styles.routeText}>Meteoros</Text>
                        <Text style={styles.knowMore}>Saiba mais</Text>
                        <Text style={styles.bgDigit}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCards}  onPress ={()=> this.props.navigation.navigate ('Updates')}>
                        <Image source={rocketIcon} style={styles.iconImage}></Image>
                        <Text style={styles.routeText}>Atualizações</Text>
                        <Text style={styles.knowMore}>Saiba mais</Text>
                        <Text style={styles.bgDigit}>3</Text>
                    </TouchableOpacity>
                    {/* </View> */}
                </ImageBackground>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center",
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 40,
        color: "white",
    },
    routeCards: {
        flex: 0.25,
        justifyContent: "center",
        // alignItems:"center",
        alignSelf: "center",
        borderRadius: 30,
        backgroundColor: "#FFFF",
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        width: 300,
    },
    routeText: {
        fontWeight: "bold",
        fontSize: 35,
        color: "black",
        marginTop: 75,
        paddingLeft: 30,
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80,
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15,
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183,183,183,0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1,
    },
});
