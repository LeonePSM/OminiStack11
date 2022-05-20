import React from "react";
import './styles.css';
import { FiArrowLeft } from 'react-icons/fi';
import {Link} from 'react-router-dom'

import logo from '../../assets/logo UT2.png';

export default function Register() {
return (
<div className="register-container">
    <div className="content">
        <section>
            <img src={logo} alt="logoUT" />
            <h1>Cadastro</h1>
            <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
        
            <Link className="back-link" to="/register">
                    < FiArrowLeft size = {16} color="E02041" />
                        Não tenho Cadastro
                </Link>
        </section>

        <form>
        <input placeholder="Nome da ONG" />
        <input type="email" placeholder="E-mail" />
        <input placeholder="whatsapp" />

        <div className="input-group">
        <input placeholder="Cidade" />
        <input placeholder="UF" style={{ width:80 }}/>
        </div>
        <button type="submit" className="button"> Cadastrar </button>
        </form>
    </div>
</div>
) ;
}