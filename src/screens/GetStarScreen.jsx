// import { useState, UseEffect } from "react";
// import { Image, View } from "react-native";
// import { Text } from "react-native-paper";

// import { Button } from "react-native-paper";
// import { View } from "react-native-web";

// export default function GetStarScreen() {
//     const [stars, setStars] = useState([]);

//     UseEffect(
//         () => {
//             consultar();
//         },
//         []
//     );

//     const consultar = async () => {
//         const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=JPb8BTPuA95t6JUJ0gAV6I5wpzNcVG5Qeh40DdpH");
//         const data = await response.json();
//         console.log(data.apod);
//         setStars(await data.apod);
//     };


//     return (
//         <View>
//             <Text> Consultar Estrela do Dia </Text>
//         {stars.map((star) => (
//             <View key={star.date}>
//                 <Image
//                     source={{ uri: star.Image[0] }}
//                     style={{ width: "100%", maxWidth: 350, height: 50 }}
//                 />
//                 <Text>{star.explanation}</Text>
//             </View>
//         ))
//         }
//     </View>
//     );
// }

import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { Text } from "react-native-paper";
import axios from "axios";
import styles from "../config/styles";
import { ImageBackground } from "react-native";

const API_KEY = "pvTOTeZPuyM3KaN2lzEbfkGzfGcazK91W7BZZJSD";

export default function GetStarScreen() {
    const [getStar, setGetStar] = useState(null);
    const [imagemNasa, setImagemNasa] = useState(null);

    const fetchStarUrl = async () => {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
        try {
            const response = await axios.get(url);
            console.log(response.data);

            setGetStar(response.data);
            setImagemNasa(response.data.url);
        } catch (error) {
            console.error("Erro ao buscar a imagem:", error);
        }
    };

    useEffect(() => {
        fetchStarUrl();
    }, []);

    return (
        <ImageBackground
            source={require("../../assets/galaxia.jpg")}
            style={styles.imageBackground}
        >
            <View style={styles.container}>

                <Text style={styles.walter}> Galáxia fotografada no dia de hoje </Text>
                {imagemNasa && (
                    <Image
                        source={{ uri: imagemNasa }}
                        style={{ width: "100%", maxWidth: 350, height: 350 }}
                    />
                )}
                <Text style={styles.walter}>{getStar?.title} </Text>


            </View>
        </ImageBackground>
    );
}
