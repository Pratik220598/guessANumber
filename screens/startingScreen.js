import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Card from '../components/Card';
import colours from '../constants/colours';
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer';

const StartingScreen = props => {

    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const handleInput = inputText => {
        setEnteredValue(inputText);
    };

    const handleReset = () => {
        setEnteredValue("");
    };

    let output;

    if (confirmed) {
        output = (
            <Card style={styles.container}>
                <Text style={{ textAlign: 'center', fontSize: 18 }}>You selected: </Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Text style={styles.button} color={colours.lightPurple} onPress={() => props.onStartGame(selectedNumber)}>
                    START GAME
                </Text>
            </Card>
        );
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text style={{ fontSize: 18 }}>Select a Number</Text>
                    <Input
                        style={styles.input}
                        maxLength={2}
                        onChangeText={handleInput}
                        value={enteredValue}
                        keyboardType="numeric"
                    />
                    <View style={styles.buttonContainer}>
                        <Text style={styles.button} color={colours.lightPurple} onPress={handleReset}>
                            Reset
                        </Text>
                        <Text style={styles.button} color={colours.lightPurple} onPress={confirmInputHandler}>
                            Confirm
                        </Text>
                    </View>
                </Card>
                {output}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    inputContainer: {
        width: 300,
        maxWidth: '90%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        height: 60,
    },
    button: {
        padding: 15,
        fontSize: 22,
        backgroundColor: colours.brown,
        borderRadius: 35,
        color:colours.white
    },
    input: {
        fontSize: 20,
        width: 50,
        textAlign: 'center'
    },
    container: {
        marginTop: 20,
        alignItems: 'center',

    }
});

export default StartingScreen;