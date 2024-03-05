import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors'
import { fontSizes, spacing } from '../../utils/sizes'

export const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold'
  },
  item: {
    fontSize: fontSizes.md,
    paddingTop: spacing.sm,
    color: colors.white
  },
  container: {
    padding: spacing.lg,
    flex: 1
  }
});