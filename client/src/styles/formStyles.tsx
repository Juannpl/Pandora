import { StyleSheet } from 'react-native';

const formStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',  // Assure-toi que l'arrière-plan n'est pas blanc
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: 'white',  // Couleur de fond pour que l'input soit bien visible
    color: 'black',  // Assure-toi que le texte soit bien visible
  },

  button: {
    backgroundColor: 'black',  // Couleur du bouton
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },

  buttonText: {
    color: 'white',  // Couleur du texte du bouton
    textAlign: 'center',
  },
});

export default formStyles;
