import { StyleSheet } from 'react-native';
import { spacing } from '../../utils/sizes'

export const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row'
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm
  },
  button: {
    justifyContent: 'center',
  }
});
