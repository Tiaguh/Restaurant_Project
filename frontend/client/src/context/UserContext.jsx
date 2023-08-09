import React, { createContext, useContext, useState } from 'react';
import api from '../api';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  console.log(user);

  // Função para atualizar os dados do usuário
  async function updateUser(id) {
    try {
      const response = await api.get(`/user/get-user/${id}`);
      setUser(response.data.name);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
