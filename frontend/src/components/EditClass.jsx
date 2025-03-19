import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditClass = ({ id }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [capacity, setCapacity] = useState('');
    const [active, setActive] = useState(true);
    const [date, setDate] = useState('');

    useEffect(() => {
        // Carregar dados existentes quando o componente é montado
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5010/turma/${id}`);
                const turma = response.data;
                setName(turma.nome);
                setDescription(turma.desc);
                setYear(turma.anoletivo);
                setCapacity(turma.capacidade);
                setActive(turma.bt);
                setDate(turma.data);
            } catch (error) {
                console.error('Erro ao carregar turma:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:5010/turma/${id}`, {
                nome: name,
                desc: description,
                anoletivo: year,
                capacidade: capacity,
                bt: active,
                data: date,
            });
            alert('Turma alterada com sucesso!');
        } catch (error) {
            console.error('Erro ao alterar turma:', error);
            alert('Erro ao alterar a turma.');
        }
    };

    return (
        <div>
            <h2>Alterar Turma</h2>
            <form onSubmit={handleSubmit}>
                {/* Campos para edição de dados */}
                {/* Similar ao InsertClass */}
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Descrição:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Ano Letivo:</label>
                    <input
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Capacidade:</label>
                    <input
                        type="number"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Ativo:</label>
                    <select value={active} onChange={(e) => setActive(e.target.value === 'true')}>
                        <option value={true}>Sim</option>
                        <option value={false}>Não</option>
                    </select>
                </div>
                <div>
                    <label>Data de Inclusão:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Alterar</button>
            </form>
        </div>
    );
};

export default EditClass;