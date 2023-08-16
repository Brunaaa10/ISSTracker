import React from "react";
import { ImageBackground } from "react-native";
import { Text, TouchebleOpacity, View, StyleSheet, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const bgImg = require("../Iss-assets/bg_image.png");
const meteorsIcon = require("../Iss-assets/meteor_icon.png");
const issIcon = require("../Iss-assets/iss_icon.png");

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
                <ImageBackground> source = {bgImg}
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>ISS Tracker</Text>
                    </View>

                    <View>
                        <TouchebleOpacity style={styles.routeCard}>
                            <Image>
                                source = {issIcon}
                            </Image>
                            <Text style={styles.routeText}>Localização da ISS</Text>
                            <Text>1</Text>
                            <Text style={styles.knowMore}>Saiba mais</Text>
                        </TouchebleOpacity>

                        <TouchebleOpacity style={styles.routeCard}>
                            <Image>
                                source = {meteorsIcon}
                            </Image>
                            <Text style={styles.routeText}>Meteoros</Text>
                            <Text>2</Text>
                            <Text style={styles.knowMore}>Saiba mais</Text>
                        </TouchebleOpacity>
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
