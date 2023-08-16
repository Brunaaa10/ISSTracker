import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, StatusBar, ImageBackground, Platform, SafeAreaView } from "react-native"


const bgImg = require("../Iss-assets/bg_image.png");
const meteorsIcon = require("../Iss-assets/meteor_icon.png");
const issIcon = require("../Iss-assets/iss_icon.png");

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}></SafeAreaView>
                <ImageBackground  source = {bgImg}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>ISS Tracker</Text>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.routeCard}>
                            <Image source = {issIcon}></Image>
                            <Text style={styles.routeText}>Localização da ISS</Text>
                            <Text style={styles.knowMore}>Saiba mais</Text>
                            <Text>1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.routeCard}>
                            <Image source = {meteorsIcon}></Image>
                            <Text style={styles.routeText}>Meteoros</Text>
                            <Text style={styles.knowMore}>Saiba mais</Text>
                            <Text>2</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
        
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    }
});
