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
    justifyContent: 'center',
    elevation: 1,
    padding: 2,
    shadowColor: '#000',
    marginLeft: 8,
  },
  tabActive: {
    alignItems: 'center',
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: 20,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 2,
    elevation: 1,
    marginLeft: 8,
    shadowColor: '#000',
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
