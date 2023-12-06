import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  buttonBase: {
    paddingVertical: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height: 48,
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#293441',
    borderRadius: 20,
  },
  secondaryButton: {
    backgroundColor: '#5A7E99',
    paddingHorizontal: 0,
    borderRadius: 0,
    height: 70,
  },
  outlinedButton: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#E65738',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 8,
  },
  disabledButton: {
    opacity: 0.4,
  },
});
