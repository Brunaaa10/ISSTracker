import axios from "axios"
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native"

export default class Meteors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            meteors: {},
        }

    }

    componentDidMount() {
        this.getMeteors()
    }

    getMeteors = () => {
        axios
            .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=ogwqFuEG53qCmM6W7rmzxGIRauhzofIuoVi9XOP4")
            .then(response => {
                this.setState({ meteors: response.data.near_earth_objects }),
                    console.log(Object.keys(this.state.meteors))
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }


    render() {
        if (Object.keys(this.state.meteors).length == 0) {
            return(
                <View styles = {{flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text>Carregando..</Text>
                </View>
            )

        } else {
            var meteorArray = Object.keys(this.state.meteors).map(meteorDate => {
                return (
                    this.state.meteors(meteorDate)
                )
            })
            var meteors = [].concat.apply([], meteorArray)

            meteors.forEach(meteor => {
                var diameter = (meteor.estimated_diameter.kilometers.estimated_diameter_min +
                    meteor.estimated_diameter.kilometers.estimated_diameter_max) / 2

                var threatScore = (diameter / meteor.close_approach_data[0].miss_distance.kilometers) * 1000000000
                meteor.threat_score = threatScore
            });

            return (
                <View>
                    <Text>Tela de Meteoros</Text>
                </View>
            )
        }
    }
}