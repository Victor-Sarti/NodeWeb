import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ListClass.css'

const ListClasses = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await axios.get('http://localhost:5010/turma');
                setClasses(response.data);
            } catch (err) {
                setError('Erro ao carregar as turmas');
            } finally {
                setLoading(false);
            }
        };
        
        fetchClasses();
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Lista de Turmas</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Ano Letivo</th>
                        <th>Capacidade</th>
                        <th>Ativo</th>
                        <th>Data de Inclusão</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((cls) => (
                        <tr key={cls.id}>
                            <td>{cls.id}</td>
                            <td>{cls.nome}</td>
                            <td>{cls.ds}</td>
                            <td>{cls.letivo}</td>
                            <td>{cls.capacidade}</td>
                            <td>{cls.bt ? 'Sim' : 'Não'}</td>
                            <td>{new Date(cls.inclusao).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListClasses;