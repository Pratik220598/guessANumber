import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import colours from '../constants/colours';

const randomNum = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return randomNum(min, max, exclude);
    } else {
        return rndNum;
    }
};
const renderListItem = (value, numOfRound) => (
    <View key={value} style={styles.listItem}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>#{numOfRound} - </Text>
      <Text style={{fontSize:20,paddingBottom:15}}>{value}</Text>
    </View>
  );

const GameScreen = props => {
    const initialGuess = randomNum(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === props.userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if (direction === 'low') {
            currentHigh.current = currentGuess;
        }
        if (direction === 'high') {
            currentLow.current = currentGuess;
        }
        const nextNumber = randomNum(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
    }
  

    return (
        <ScrollView>
            <View style={styles.screen}>
            <Text style={{ textAlign: 'center', fontSize: 18 }}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Text style={styles.button} onPress={nextGuessHandler.bind(this, 'low')}>
                    LOWER
                </Text>
                <Text style={styles.button} onPress={nextGuessHandler.bind(this, 'high')}>
                    GREATER
                </Text>
            </Card>
            <ScrollView >
            {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
            </ScrollView>
        </View>
        </ScrollView>
    );
            }

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        width: 300,
        height: 100,
    },
    button: {
        padding: 15,
        fontSize:22,
        backgroundColor:colours.blue,
        color:colours.white,
        borderRadius: 35,
    },
    listItem:{
        flexDirection: 'row',
        alignContent:'space-around',
    }
});

export default GameScreen;
