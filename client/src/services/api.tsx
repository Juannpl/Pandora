interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  age: string;
  phone_number: string;
  address: string;
  city: string;
  country: string;
}

export const createUser = async (userData: UserData) => {
  try {
    const response = await fetch('http://10.0.2.2:8000/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (response.ok) {
      return { success: true, message: 'User created successfully', data };
    } else {
      return { success: false, message: data.detail || 'Error creating user' };
    }
  } catch (error) {
    return { success: false, message: 'Network error' };
  }
};
