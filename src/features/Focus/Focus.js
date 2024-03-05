import { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from './styles'; 

import { RoundedButton } from '../../components/RoundedButton/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="What would you like to focus on?"
          onChangeText={setSubject}
          value={subject}
          style={styles.textInput}
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};
