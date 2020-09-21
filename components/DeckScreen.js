import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Text, View, Button, StyleSheet } from 'react-native';

import { deckDeleted } from '../features/decksSlice';

export default function DeckScreen({ route, navigation }) {
  const { itemId } = route.params;

  const decks = useSelector((state) => state.decks.appData);
  const dispatch = useDispatch();

  const deck = decks.filter((item) => item.id === itemId)[0];

  const onDeleteDeckClicked = (e) => {
    dispatch(deckDeleted(itemId));
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      {deck !== undefined && (
        <View>
          <Text style={styles.titleText}>{deck.name}</Text>
          <Text style={styles.baseText}>cards: {deck.cards.length}</Text>
          <View style={{ marginVertical: 5 }}>
            <Button
              title="Add Card"
              onPress={() =>
                navigation.navigate('CreateCardScreen', { itemId })
              }
            />
          </View>
          <View style={{ marginVertical: 5 }}>
            <Button
              title="Start Quiz"
              onPress={() =>
                navigation.navigate('ShowCardScreen', {
                  itemId,
                  questionIndex: 0,
                  correctAnswers: 0,
                })
              }
            />
          </View>
          <Text style={styles.deleteText} onPress={onDeleteDeckClicked}>
            Delete
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
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
  deleteText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});
