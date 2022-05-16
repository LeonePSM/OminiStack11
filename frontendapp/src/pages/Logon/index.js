import React from 'react';
import './styles.css';
import capaUT from '../../assets/Capa UT2.jpg';
import logo from '../../assets/logo UT2.png';
import { FiLogIn } from 'react-icons/fi';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
            <img src={logo} alt="logoUT" />
             <form>
                <h1> Faça seu Logon </h1>

             <input placeholder = "Sua ID"/> 
             <button type="submit">Entrar
             
             </button>

                <a href="/register">
                    <FiLogIn size = {16} color="E02041" />
                        Não tenho Cadastro
                </a>
             </form>
            </section>
           
            <img src={capaUT} alt="Capa" />
        </div>
    );
}