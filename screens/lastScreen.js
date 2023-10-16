import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../components/Card';
import colours from '../constants/colours';

const LastScreen = props => {
    return(
        <ScrollView>
            <View style={styles.screen}>
            <Text style={{textAlign:'center', fontSize:28, color:colours.red,fontWeight:'bold'}}>Game Over</Text>
            <Card style={styles.card}>
                    <View style={styles.container}>
                    <Text style={{fontSize: 18,paddingBottom:20 }}>Guesses taken: {props.guessNum}</Text>
                    <Text style={{fontSize: 18,paddingBottom:20 }}>Initial Number: {props.userNum}</Text>
                    <Text style={styles.button} onPress={props.onRestart} >
                    NEW GAME
                </Text>
                </View>
            </Card>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:{
        width: 400,
        height: 550,
    },
    container: {
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        marginTop: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        width: 300,
        height: 60,
    },
    button: {
        padding: 15,
        fontSize: 22,
        backgroundColor: colours.blue,
        color:colours.white,
        borderRadius: 35,
    },
});

export default LastScreen;