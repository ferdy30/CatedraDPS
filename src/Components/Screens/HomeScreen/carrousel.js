import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://pbs.twimg.com/media/EgWvDESWoAMM_1d.jpg",
        "https://www.h2occ.com/uploads/novedades/6507_BURGER-KING.jpg",
        "https://pbs.twimg.com/media/Dv7-LkvWoAAXYdE.jpg",  
        "https://pbs.twimg.com/media/Dv8H-rsXQAAm2bP.jpg",
        "https://i0.wp.com/www.ofertasahora.com/wp-content/uploads/2015/07/Pizza-Dominos-por-5.99-de-dolar-promociones-de-lunes-a-jueves.png?ssl=1",  
      
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox style={styles.img}
         
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
         }autoplay
         circleLoop 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingRight: 10,
    
  },
  img: {
    width: '95%',        
    height: 160,
    resizeMode: "contain",
    borderRadius: 10,

  }
});