import { useState, UseEffect } from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import api from './src/api';

export default function GetStarScreen() {
    const [stars, setStars] = useState([]);

    UseEffect(
        () => {
            consultar();
        },
        []
    );

    const consultar = async () => {
        const response = await fetch("https://api.nasa.gov/planetary/apod");
        const data = await response.json();
        console.log(data.apod);
        setStars(await data.apod);
    };


    return (
        <View>
            <Text> Consultar Estrela do Dia </Text>
        {stars.map((star) => (
            <View key={star.date}>
                <Image
                    source={{ uri: star.Image[0] }}
                    style={{ width: "100%", maxWidth: 350, height: 50 }}
                />
                <Text>{star.explanation}</Text>
            </View>
        ))
        }
    </View>
    );
}