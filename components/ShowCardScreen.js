import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Text, View, Button, StyleSheet, Platform } from 'react-native';

import { SetLocalNotification } from '../api/notification';


export default function ShowCardScreen({ route, navigation }) {
  const { itemId, questionIndex, correctAnswers } = route.params;
  const newIndex = questionIndex + 1;

  const [isAnswered, setIsAnswered] = React.useState(false);

  const decks = useSelector((state) => state.decks.appData);
  const dispatch = useDispatch();

  const cards = decks.filter((item) => item.id === itemId)[0].cards;

  const questionsCount = cards.length || 0;

  if (!questionsCount) {
    return (
      <View style={styles.container}>
        <Text style={styles.boldText}>
          Sorry, you cannot take a quiz because there are no cards in the deck!
        </Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  const { question, answer } = cards[questionIndex];

  const answerClicked = (isCorrect) => {
    const navOptions = {
      itemId,
      questionIndex: newIndex,
      correctAnswers: isCorrect ? correctAnswers + 1 : correctAnswers,
    };

    if (newIndex < questionsCount) {
      navigation.push('ShowCardScreen', navOptions);
    } else {
      //dispatch(scoreTimestampUpdated(Date.now()));
      if (Platform.OS === 'android' || Platform.OS === 'ios') {
        // Reset the notification timer if a quiz was completed - the simplest way :)
        SetLocalNotification();
      }
      navigation.push('ShowScoreScreen', navOptions);
    }
  };

  const onCorrectAnswerClicked = (e) => {
    answerClicked(true);
  };

  const onIncorrectAnswerClicked = (e) => {
    answerClicked(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Question:</Text>
      <Text style={styles.baseText}>{question}</Text>
      {!isAnswered ? (
        <View style={{ marginVertical: 5 }}>
          <Button
            title="Show Answer"
            onPress={() => setIsAnswered(true)}
          />
        </View>
      ) : (
          <View>
            <Text style={styles.titleText}>Answer:</Text>
            <Text style={styles.baseText}>{answer}</Text>
            <View style={{ marginVertical: 5 }}>
              <Button
                title="Correct"
                onPress={onCorrectAnswerClicked}
              />
            </View>
            <View style={{ marginVertical: 5 }}>
              <Button
                title="Incorrect"
                onPress={onIncorrectAnswerClicked}
              />
            </View>
          </View>
        )}
      <Text style={styles.boldText}>
        Question {newIndex}/{questionsCount}
      </Text>
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
  },
  boldText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
