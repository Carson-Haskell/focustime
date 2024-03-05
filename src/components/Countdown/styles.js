import { StyleSheet } from 'react-native';
import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
    borderRadius: '15%',
    overflow: 'hidden',
  },
});
