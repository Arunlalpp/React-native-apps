import {StyleSheet} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    height: 44,
    backgroundColor: COLORS.backgroundSecondary,
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'row',
    borderColor: COLORS.transparent,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 16,
    fontFamily: FONTFAMILY.poppins_black,
    fontWeight: '400',
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryBlack,
  },
  leftAccessoryView: {
    backgroundColor: COLORS.primaryText,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  rightAccessoryView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  errorView: {
    display: 'flex',
    paddingTop: 4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  errorText: {
    fontFamily: FONTFAMILY.poppins_black,
    fontWeight: '400',
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryOrangeHex,
  },
});
