import axios from "axios";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, ImageBackground, StatusBar, SafeAreaView, Platform } from "react-native"
import MapView, { Marker } from "react-native-maps";

export default class ISSLocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: {}
        }
    }

    componentDidMount() {
        this.getIssLocation()
        try {
            setInterval(async () => {
                this.getIssLocation()
            }, 5000);
        } catch (error) {
            console.log(error)
        }
        
    }

    getIssLocation = () => {
        axios
            .get("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response => {
                this.setState({ location: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }


    render() {
        if (Object.keys(this.state.location).length === 0) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>Carregando...</Text>
                </View>
            )
        } else {


            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <ImageBackground style={styles.backgroundImage} source={require("../Iss-assets/iss_bg.jpg")}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>ISSLocation</Text>
                        </View>
                        <View style={styles.mapContainer}>
                            <MapView style={styles.map}
                                region={{
                                    latitude: this.state.location.latitude,
                                    longitude: this.state.location.longitude,
                                    latitudeDelta: 100,
                                    longitudeDelta: 100
                                }}>
                                <Marker coordinade={{ latitude: this.state.location.latitude, longitude: this.state.location.longitude }}>
                                    <Image source={require("../Iss-assets/iss_icon.png")} style={{ height: 50, width: 50 }} />
                                </Marker>
                            </MapView>
                        </View>
                    </ImageBackground>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    refeshContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    mapContainer: {
        flex: 0.6
    },
    map: {
        width: "100%",
        height: "100%"
    }
});