import React, { useState } from 'react';
import '../styles/Navbar.css';
import InsertClass from './InsertClass';
import ListClass from './ListClass';
import EditClass from './EditClass';
import DeleteClass from './DeleteClass';
import SearchClasses from './SearchClasses';  // Importando o novo componente

const Navbar = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const handleInsertClick = () => {
        setActiveComponent(activeComponent === 'insert' ? null : 'insert');
    };

    const handleListClick = () => {
        setActiveComponent(activeComponent === 'list' ? null : 'list');
    };

    const handleEditClick = () => {
        setActiveComponent(activeComponent === 'edit' ? null : 'edit');
    };

    const handleDeleteClick = () => {
        setActiveComponent(activeComponent === 'delete' ? null : 'delete');
    };

    const handleSearchClick = () => {
        setActiveComponent(activeComponent === 'search' ? null : 'search');  // Nova opção para busca
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">ADO Web</div>
                <ul className="navbar-links">
                    <li><a onClick={handleInsertClick}>Inserir</a></li>
                    <li><a onClick={handleListClick}>Listar</a></li>
                    <li><a onClick={handleEditClick}>Alterar</a></li>
                    <li><a onClick={handleDeleteClick}>Deletar</a></li>
                    <li><a onClick={handleSearchClick}>Buscar</a></li>  {/* Link para busca */}
                </ul>
            </nav>
            {activeComponent === 'insert' && <InsertClass />}
            {activeComponent === 'list' && <ListClass />}
            {activeComponent === 'edit' && <EditClass />}
            {activeComponent === 'delete' && <DeleteClass />}
            {activeComponent === 'search' && <SearchClasses />}  {/* Adicionando o componente de busca */}
        </div>
    );
};

export default Navbar;