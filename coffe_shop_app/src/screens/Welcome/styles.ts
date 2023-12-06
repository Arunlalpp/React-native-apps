import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logoSection: {
    minHeight: 600,
    justifyContent: 'flex-end',
    textAlign: 'center',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: FONTSIZE.size_24,
    fontWeight: '500',
    color: COLORS.primaryWhiteHex,
  },
  brandName: {
    textAlign: 'center',
    fontSize: FONTSIZE.size_30,
    fontWeight: '600',
    color: COLORS.primaryOrangeHex,
  },
});
