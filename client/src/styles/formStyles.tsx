import { StyleSheet } from 'react-native';

const formStyles = StyleSheet.create({

  text: {
    fontFamily: 'Poppins-Thin',
  },
  
  container: {
    backgroundColor: '#0E2954',  // Assure-toi que l'arrière-plan n'est pas blanc
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    color: 'white',  // Couleur du titre
    fontSize: 50,
    textAlign: 'center',
  },

  section: {
    height: '50%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  division: {
    height: '20%',
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  inputContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    height: 50,
    marginBottom: '10%',
  },

  input: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: 'white',
    color: 'black',

    borderRadius: 20,

    width: '100%',
    height: '100%',

    fontSize: 18,
    paddingLeft: 20,
  },

  button: {
    backgroundColor: '#363062',  // Couleur du bouton
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    borderRadius: 20,

    //ANDROID
    elevation: 3,

    // IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },

  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    textAlign: 'center',
    fontSize: 19,
  },

  link: {
    marginTop: 15,
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 15,
  },

});

export default formStyles;
