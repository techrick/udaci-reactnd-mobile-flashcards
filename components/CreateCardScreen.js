import * as React from 'react';
import { useDispatch } from 'react-redux';

import { View, Button, TextInput, StyleSheet } from 'react-native';

import { cardAdded } from '../features/decksSlice';

export default function CreateCardScreen({ route, navigation }) {
  const { itemId } = route.params;

  const [question, setQuestion] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const dispatch = useDispatch();

  const onQuestionChanged = (value) => {
    setQuestion(value);
  };
  const onAnswerChanged = (value) => {
    setAnswer(value);
  };

  // Some UX stuff
  const canSave = Boolean(question.trim()) && Boolean(answer.trim());

  const onCreateCardClicked = (e) => {
    dispatch(cardAdded(question.trim(), answer.trim(), itemId));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={question}
        placeholder="Question"
        onChangeText={onQuestionChanged}
      />
      <TextInput
        style={styles.textInput}
        value={answer}
        placeholder="Answer"
        onChangeText={onAnswerChanged}
      />
      <Button
        title="Submit"
        disabled={!canSave}
        onPress={onCreateCardClicked}
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
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginVertical: 5,
  },
});
