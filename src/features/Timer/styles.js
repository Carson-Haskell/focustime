import { StyleSheet } from 'react-native';
import { spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectWrapper: {
    paddingTop: spacing.lg,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
  progressWrapper: {
    paddingTop: spacing.sm,
  },
  progressBar: {
    height: spacing.sm,
  },
  timingWrapper: {
    flex: 0.1,
    paddingTop: spacing.xxl,
    flexDirection: 'row'
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
