import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Tiendas from "./Tiendas";
import Carousel from "./carrousel";
import Opciones from "./opciones"


export default function App() {
    return (        
                    
            <>
            <StatusBar/>
            
            <View style={styles.container}>
                <ScrollView style={styles.scrollstyle}>
                    <Opciones/>
                    <Text style={styles.texto}>Promociones</Text>
                <Carousel/>
                    <Text style={styles.texto}>Los mejores restaurantes</Text>
                    <Tiendas />
                </ScrollView>
                
            </View>
                    
         </>         
                    
    );
   
}

const styles = StyleSheet.create({
   texto: {
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal:15,
        marginTop: 20,
        marginBottom: 20,
        color: "#6D6D6D",
        
    }, 
});
