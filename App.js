import React from 'react';
import { useState } from 'react';
import { StyleSheet, SafeAreaView,StatusBar} from 'react-native';
import Header from './components/Header';
import StartingScreen from './screens/startingScreen';
import GameScreen from './screens/GameScreen';
import LastScreen from './screens/lastScreen';


export default function App() {
const [userNumber, setUserNumber] = useState();
const [guess, setGuess] = useState(0);

const startGameHandler = num => {
  setUserNumber(num);
  setGuess(0);
};

const gameOverHandler = Rounds => {
  setGuess(Rounds);
};

const newGameHandler = () => {
  setGuess(0);
  setUserNumber(0);
}

let content = <StartingScreen onStartGame={startGameHandler} />;

if (userNumber && guess <= 0) {
  content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
} else if (guess > 0){
  content = <LastScreen guessNum={guess} userNum={userNumber} onRestart={newGameHandler}/>;
}

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Guess a Number"/>
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  
  }
});
