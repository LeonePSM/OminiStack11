import React from 'react';
import './styles.css';
import capaUT from '../../assets/Capa UT2.jpg';
import logo from '../../assets/logo UT2.png';
import { FiLogIn } from 'react-icons/fi';
import {Link} from 'react-router-dom'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
            <img src={logo} alt="logoUT" />
             <form>
                <h1> Faça seu Logon </h1>

             <input placeholder = "Sua ID"/> 
             <button className="button" type="submit">Entrar
             
             </button>

                <Link className="back-link" to="/register">
                    <FiLogIn size = {16} color="E02041" />
                        Não tenho Cadastro
                </Link>
             </form>
            </section>
           
            <img src={capaUT} alt="Capa" />
        </div>
    );
}