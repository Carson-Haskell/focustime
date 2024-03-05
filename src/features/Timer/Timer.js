import React, { useState } from 'react';
import { View, Text, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

import { PATTERN } from './timer.helpers';

import { Countdown } from '../../components/Countdown/Countdown';
import { RoundedButton } from '../../components/RoundedButton/RoundedButton';
import { Timing } from '../Timing/Timing';

import { styles } from './styles';
import { colors } from '../../utils/colors';

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={styles.subjectWrapper}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={styles.progressWrapper}>
        <ProgressBar
          color={colors.progressBar}
          style={styles.progressBar}
          progress={progress}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          onPress={() => setIsStarted((prev) => !prev)}
          title={isStarted ? 'stop' : 'start'}
        />
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={50} title="X" onPress={clearSubject} />
      </View>
    </View>
  );
};
