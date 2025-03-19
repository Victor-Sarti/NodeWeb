import React, { useState } from 'react';
import axios from 'axios';
import '../styles/InsertClass.css'

const InsertClass = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState(''); // Ano letivo
    const [capacity, setCapacity] = useState(''); // Capacidade
    const [active, setActive] = useState(true); // Ativo
    const [date, setDate] = useState(''); // Data

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5010/turma', {
                nome: name,
                desc: description,
                anoletivo: year,
                capacidade: capacity,
                bt: active,
                data: date,
            });
            alert('Turma inserida com sucesso!');
            // Limpar os campos
            setName('');
            setDescription('');
            setYear('');
            setCapacity('');
            setActive(true);
            setDate('');
        } catch (error) {
            console.error('Erro ao inserir turma:', error);
            alert('Erro ao inserir a turma.');
        }
    };

    return (
        <div>
            <h2>Inserir Turma</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Inserir</button>
            </form>
        </div>
    );
};

export default InsertClass;