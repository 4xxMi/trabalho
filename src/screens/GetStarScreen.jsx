// import { useState, UseEffect } from "react";
// import { Image, View } from "react-native";
// import { Text } from "react-native-paper";

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
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import axios from 'axios';

const GetStarScreen = () => {
    const [starUrl, setStarUrl] = useState('');

    const fetchStarUrl = async () => {
        try {
            const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=YfEK8ygDQACML7PWrzTwjesmJ1g0nkbNbScVdPNA');
            const imageUrl = response.data.url;
            setStarUrl(imageUrl);
        } catch (error) {
            console.error('Erro ao buscar a imagem:', error);
            // Adicione uma lógica para lidar com o erro, como exibir uma mensagem ao usuário
        }
    };

    useEffect(() => {
        fetchStarUrl();
    }, []);

    return (
        <View>
            <Text>Consultar Estrela do Dia</Text>
            <Button
                onPress={fetchStarUrl}
                title="Consultar galáxia do dia"
            />
            {starUrl ? (
                <Image
                    source={{ uri: starUrl }}
                    style={{
                        flex: 1,
                        width: '100%',
                        height: 200,
                    }}
                />
            ) : (
                <Text>Carregando imagem...</Text>
            )}
        </View>
    );
};

export default GetStarScreen;
