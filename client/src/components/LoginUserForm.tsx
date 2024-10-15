import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import formStyles from '../styles/formStyles';

// Définir les types des paramètres de la pile de navigation
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

// Typage pour l'objet navigation
type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
    } else {
      // Remplacer ce bloc par l'appel à votre backend pour vérifier les identifiants
      if (email === 'test@example.com' && password === 'password123') {
        Alert.alert('Succès', 'Connexion réussie !');
      } else {
        Alert.alert('Erreur', 'Email ou mot de passe incorrect.');
      }
    }
  };

  return (
    <View style={formStyles.container}>
      <View style={formStyles.division}>
        <Text style={[formStyles.title, formStyles.text]}>Pandora</Text>
      </View>
      <View style={formStyles.section}>
        <View style={formStyles.inputContainer} >
          <TextInput
            style={formStyles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>
        <View style={formStyles.inputContainer} >
          <TextInput
            style={formStyles.input}
            placeholder="Mot de passe"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>
      <View style={formStyles.division}>
        <TouchableOpacity style={formStyles.button} onPress={handleLogin}>
          <Text style={formStyles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={formStyles.link}>Pas encore de compte ?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
