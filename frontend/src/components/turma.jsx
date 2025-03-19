// src/components/Turma.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Turma = () => {
  const [turmas, setTurmas] = useState([]);

  useEffect(() => {
    const fetchTurmas = async () => {
      try {
        const response = await axios.get('http://localhost:5010/turma');
        setTurmas(response.data);
      } catch (error) {
        console.error('Erro ao buscar turmas:', error);
      }
    };

    fetchTurmas();
  }, []);

  return (
    <div>
      <h1>Turmas</h1>
      <ul>
        {turmas.map(turma => (
          <li key={turma.id}>{turma.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Turma;