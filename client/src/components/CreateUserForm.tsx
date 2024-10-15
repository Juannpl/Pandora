import React, { useState } from 'react';
import { View, TextInput, Alert, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { createUser } from '../services/api';
import formStyles from '../styles/formStyles';

// Définir les types des paramètres de la pile de navigation
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

// Typage pour l'objet navigation
type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
}

const CreateUserForm: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
  });

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const result = await createUser(formData);
    if (result.success) {
      Alert.alert('Success', result.message);
    } else {
      Alert.alert('Error', result.message);
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
            placeholder="Prénom"
            value={formData.first_name}
            onChangeText={(text) => handleInputChange('first_name', text)}
          />
        </View>
        <View style={formStyles.inputContainer} >
          <TextInput
            style={formStyles.input}
            placeholder="Nom"
            value={formData.first_name}
            onChangeText={(text) => handleInputChange('last_name', text)}
          />
        </View>
        <View style={formStyles.inputContainer} >
          <TextInput
            style={formStyles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
        </View>
        <View style={formStyles.inputContainer} >
          <TextInput
            style={formStyles.input}
            placeholder="Numéro de téléphone"
            value={formData.phone_number}
            onChangeText={(text) => handleInputChange('phone_number', text)}
          />
        </View>
        <View style={formStyles.inputContainer} >
          <TextInput
            style={formStyles.input}
            placeholder="Mot de passe"
            secureTextEntry
            value={formData.password}
            onChangeText={(text) => handleInputChange('password', text)}
          />
        </View>
      </View>
      <View style={formStyles.division}>
        <TouchableOpacity style={formStyles.button} onPress={handleSubmit}>
          <Text style={formStyles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={formStyles.link}>Vous avez compte ?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateUserForm;
