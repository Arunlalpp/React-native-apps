import { StyleSheet } from 'react-native';
import { COLORS, FONTSIZE } from '../../theme/theme';

export const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: COLORS.transparent,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 4,
    borderRadius: 20,
  },
  tab: {
    alignItems: 'center',
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 20,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    padding: 2,
    marginLeft: 8,
  },
  tabActive: {
    alignItems: 'center',
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: 20,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 2,
    marginLeft: 8,
  },
  tabText: {
    color: COLORS.primaryBlack,
    fontWeight: '400',
    fontSize: FONTSIZE.size_14,
    marginLeft: 8,
  },
  tabTextActive: {
    color: COLORS.primaryWhiteHex,
    fontWeight: '500',
    fontSize: FONTSIZE.size_14,
    marginLeft: 8,
  },
  icon: {
    alignItems: 'center',
    backgroundColor: COLORS.primaryWhiteHex,
    borderRadius: 999,
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
});
