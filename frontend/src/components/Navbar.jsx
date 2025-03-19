import React, { useState } from 'react';
import '../styles/Navbar.css';
import InsertClass from './InsertClass'; // Importando o novo componente

const Navbar = () => {
    const [showInsertClass, setShowInsertClass] = useState(false);

    const handleInsertClick = () => {
        setShowInsertClass(true);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">ADO Web</div>
                <ul className="navbar-links">
                    <li><a onClick={handleInsertClick}>Inserir</a></li>
                    <li><a href="#Alterar">Alterar</a></li>
                    <li><a href="#Buscar">Buscar</a></li>
                    <li><a href="#Deletar">Deletar</a></li>
                </ul>
            </nav>
            {showInsertClass && <InsertClass />} {/* Mostra o componente */}
        </div>
    );
};

export default Navbar;