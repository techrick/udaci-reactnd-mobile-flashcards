import * as React from 'react';

import { Text, View, Button, StyleSheet } from 'react-native';


export default function ShowScoreScreen({ route, navigation }) {
  const { itemId, questionIndex, correctAnswers } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Your Score</Text>
      <Text style={styles.baseText}>
        You answered {correctAnswers} of {questionIndex} correct!
      </Text>
      <View style={{ marginVertical: 5 }}>
      <Button
        title="Restart Quiz"
        onPress={() =>
          navigation.navigate('ShowCardScreen', {
            itemId,
            questionIndex: 0,
            correctAnswers: 0,
          })
        }
      />
      </View>
      <View style={{ marginVertical: 5 }}>
      <Button
        title="Back to Deck"
        onPress={() =>
          navigation.navigate('DeckScreen', {
            itemId,
          })
        }
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    textAlign: 'center',
    padding: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  baseText: {
    fontSize: 16,
    fontWeight: 'normal',
  }
});
