import { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { styles } from './styles';

import { Timer } from './src/features/Timer/Timer';
import { Focus } from './src/features/Focus/Focus';
import { FocusHistory } from './src/features/FocusHistory/FocusHistory'

export default function App() {
  const [currentSubject, setCurrentSubject] = useState('');
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </> 
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject])
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}
