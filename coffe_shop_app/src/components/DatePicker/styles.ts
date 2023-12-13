import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/theme';

export const styles = StyleSheet.create({
  modalScreen: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundTransparant,
  },
  datePreviewBase: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: COLORS.primaryTertiary,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: COLORS.primaryTertiary,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  datePreviewDisabled: {
    opacity: 0.5,
  },
  datePickerContainer: {
    backgroundColor: COLORS.primaryWhiteHex,
    width: '75%',
    borderRadius: 8,
    padding: 15,
    minHeight: 300,
    overflow: 'hidden',
  },
  leftArrowStyle: {
    transform: [{ rotateY: '180deg' }],
  },
});
