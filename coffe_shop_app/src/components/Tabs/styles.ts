import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE} from '../../theme/theme';

export const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: COLORS.primaryWhiteHex,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 4,
    borderRadius: 8,
  },
  tab: {
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  tabActive: {
    backgroundColor: COLORS.primaryOrangeHex,
    paddingVertical: 5,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: COLORS.primaryBlack,
    fontWeight: '500',
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
    backgroundColor: COLORS.primaryWhiteHex,
    borderRadius: 999,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
