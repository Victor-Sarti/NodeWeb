import React, { useState } from 'react';
import axios from 'axios';

const SearchClasses = () => {
    const [year, setYear] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const response = await axios.get(`http://localhost:5010/turma/busca/ano?ano=${year}`);
            setResults(response.data);
        } catch (err) {
            console.error('Erro ao buscar turmas:', err);
            setError('Erro ao buscar turmas.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Buscar Turma por Ano</h2>
            <form onSubmit={handleSearch}>
                <div>
                    <label>Ano:</label>
                    <input
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Buscar</button>
            </form>
            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {results.map(turma => (
                    <li key={turma.id}>
                        {turma.nm_turma} - {turma.ds} (Capacidade: {turma.capacidade}, Ativo: {turma.bt ? 'Sim' : 'Não'})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchClasses;