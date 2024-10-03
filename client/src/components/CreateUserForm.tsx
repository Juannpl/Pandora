import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { createUser } from '../services/api';
import formStyles from '../styles/formStyles';

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  age: string;  // On peut laisser en string si tu veux permettre plus de flexibilité à la saisie
  phone_number: string;
  address: string;
  city: string;
  country: string;
}

const CreateUserForm = () => {
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    email: '',
    age: '',
    phone_number: '',
    address: '',
    city: '',
    country: ''
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
      <TextInput
        style={formStyles.input}
        placeholder="First Name"
        value={formData.first_name}
        onChangeText={(text) => handleInputChange('first_name', text)}
      />
      <TextInput
        style={formStyles.input}
        placeholder="Last Name"
        value={formData.last_name}
        onChangeText={(text) => handleInputChange('last_name', text)}
      />
      <TextInput
        style={formStyles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />
      <TextInput
        style={formStyles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={formData.age}
        onChangeText={(text) => handleInputChange('age', text)}
      />
      <TextInput
        style={formStyles.input}
        placeholder="Phone Number"
        value={formData.phone_number}
        onChangeText={(text) => handleInputChange('phone_number', text)}
      />
      <TextInput
        style={formStyles.input}
        placeholder="Address"
        value={formData.address}
        onChangeText={(text) => handleInputChange('address', text)}
      />
      <TextInput
        style={formStyles.input}
        placeholder="City"
        value={formData.city}
        onChangeText={(text) => handleInputChange('city', text)}
      />
      <TextInput
        style={formStyles.input}
        placeholder="Country"
        value={formData.country}
        onChangeText={(text) => handleInputChange('country', text)}
      />
      <Button
        title="Create User"
        onPress={handleSubmit}
        color="#007bff"
      />
    </View>
  );
};

export default CreateUserForm;
