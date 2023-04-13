import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity,Linking} from "react-native";
import data from './data'





export default function Products() {
    return(
        data.map((product,i) => {
                return(
                
                    <View key={i} style={styles.container}>
                        <TouchableOpacity style={styles.item}>
                           <Image style={styles.image} source={product.image} />
                            <View style={styles.contentProducts}>
                                
                                <View style={styles.text}>
                                    <Image style={styles.image2} source={product.image2} />

                                     <View style={styles.text}>

                                       <Text style={styles.name}>{product.name}</Text>
                                       
                                    
                                    </View>
                                    
                                    
                                </View>
                               
                            
                      
                            </View>
                            
                            
                        </TouchableOpacity>
                    </View>       
                )
        })
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F4F4",
        borderRadius: 10,
        marginHorizontal: 15,
        marginVertical: 4,
        borderWidth: 2,
        borderColor: '#eee',
        shadowOffset: {
            width: -8,
            height: 7,
        },
        shadowOpacity:  0.05,
        shadowRadius: 3.05,
        elevation: 0
    },
    contentProducts:{
        paddingTop: -5,
        paddingHorizontal: 10,
    },
    image: {
        width: "100%",
        height: 160,
        borderRadius: 5,
        marginBottom: 10,
    },
    image2: {
        width: "12%",
        height: 41 ,
        borderRadius: 100,
        marginBottom: 10,
    },
    
    name: {
        fontSize: 18,
        fontWeight: "bold",
        paddingHorizontal:55,
        marginVertical:-40,
    }, 
    
  
});
