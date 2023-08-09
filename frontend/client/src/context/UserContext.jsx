import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api'; // Importe a sua instância da API

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // Função para atualizar os dados do usuário
  async function updateUser(id) {
    try {
      const response = await api.get(`/user/${id}`); // Endpoint que retorna os dados do usuário com base no ID
      setUser(response.data); // Supondo que o response.data contém o nome do usuário e outros dados
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  // ...

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
