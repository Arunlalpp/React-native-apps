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
    width: '90%',
  },
  primaryButton: {
    backgroundColor: '#293441',
  },
  secondaryButton: {
    backgroundColor: '#5A7E99',
  },
  outlinedButton: {
    borderWidth: 2,
    borderColor: '',
    borderRadius: 10,
    backgroundColor: '#E65738',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 8,
  },
});
