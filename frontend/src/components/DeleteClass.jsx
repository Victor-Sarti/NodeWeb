import React, { useState } from 'react';
import axios from 'axios';

const DeleteClass = () => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`http://localhost:5010/turma/${id}`);
            setMessage(`Turma deletada com sucesso! Linhas afetadas: ${response.data.linhasAfetadas}`);
            setId(''); // Limpa input após sucesso
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setMessage('Registro não encontrado.');
            } else {
                setMessage('Erro ao deletar a turma.');
            }
        }
    };

    return (
        <div>
            <h2>Deletar Turma</h2>
            <form onSubmit={handleDelete}>
                <div>
                    <label>ID da Turma:</label>
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Deletar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteClass;