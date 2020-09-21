import * as React from 'react';
import { useDispatch } from 'react-redux';

import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

import { deckAdded } from '../features/decksSlice';


export default function CreateDeckScreen({ navigation }) {
  const [deckName, setDeckName] = React.useState('');
  const dispatch = useDispatch();

  const onDeckNameChanged = (value) => setDeckName(value);

  // Some UX stuff
  const canSave = Boolean(deckName.trim());

  const onCreateDeckClicked = (e) => {
    const { payload } = dispatch(deckAdded(deckName.trim()));
    navigation.navigate('DeckScreen', { itemId: payload.id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>What is the title of your new deck?</Text>
      <TextInput
        style={styles.textInput}
        value={deckName}
        onChangeText={onDeckNameChanged}
      />
      <Button
        title="Create Deck"
        disabled={!canSave}
        onPress={onCreateDeckClicked}
      />
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
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginVertical:10
  },
});
