import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#FFECC7',
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'flex-start',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 2,
  },
  container2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFECC7',
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'flex-start',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 2,
  },
  text: {
    color: 'gray',
    marginBottom: 30,
  },
  button: {
    width: '90%',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonFacebook: {
    backgroundColor: '#1976D2',
  },
  buttonGoogle: {
    backgroundColor: '#C94130',
  },
  buttonApple: {
    backgroundColor: '#000',
  },
  loadingContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,.9)',
    zIndex: 999,
  },
});
