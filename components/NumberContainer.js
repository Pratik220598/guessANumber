import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colours';


const NumberContainer = props => {
return(
    <View style={styles.container}>
        <Text style={styles.number}>{props.children}</Text>
    </View>
)
};

const styles=StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent:'center',
    },
    number: {
        color: Colors.black,
        fontSize: 24,
    }
}); 

export default NumberContainer