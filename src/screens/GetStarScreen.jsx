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

import { useState, useEffect } from "react";
import { Text, Button } from 'react-native-paper';
import axios from 'axios';
import { View } from "react-native";

const API_KEY = "pejNGOqqTziOG8DJAzvt66hMwyG4boX0KUgQ0cus";

export default function GetStarScreen() {
    const [starUrl, getStar, setGetStar, star, fetchStarUrl] = useState();

    useEffect(() => {
        const fetchStarUrl = async () => {
            const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
            try {
                const response = await axios.get(url);
                console.log(response.data);

                setGetStar(response.data)
            } catch (error) {
                console.error('Erro ao buscar a imagem:', error);
            }
        };
        fetchStarUrl();
    }, []);

    return (
            
            <View key={url.src} >

           <Text> Consultar Estrela do Dia </Text>
            
            <Button
                onPress={fetchStarUrl}
                title="Consultar galáxia do dia"
            />

                <Image
                    source={{ uri:`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`  }}
                    style={{ width: "100%", maxWidth: 350, height: 50 }}
                />
                <Text> {fetchStarUrl.title}</Text>
        </View >
        );
}