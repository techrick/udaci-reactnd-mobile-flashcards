import * as React from 'react';
import { useSelector } from 'react-redux';

import { Text, View, FlatList, StyleSheet } from 'react-native';


export default function HomeScreen({ navigation }) {
  const decks = useSelector((state) => state.decks.appData);

  return (
    <View style={styles.container}>
      {decks.length === 0 && <Text>No decks there, please create a new one.</Text>}
      <FlatList
        data={decks}
        renderItem={({ item }) => (
          <Text
            style={[styles.titleText, { margin: 10 }]}
            onPress={() =>
              navigation.navigate('DeckScreen', {
                itemId: item.id,
              })
            }>
            {item.name}
            {'\n'}
            <Text style={styles.baseText}>
              {item.cards.length} {item.cards.length === 1 ? 'card' : 'cards'}
            </Text>
          </Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});
