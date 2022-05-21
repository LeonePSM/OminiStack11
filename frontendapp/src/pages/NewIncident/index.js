import React from "react";
import './styles.css';
import { FiArrowLeft } from 'react-icons/fi';
import {Link} from 'react-router-dom'

import logo from '../../assets/logo UT2.png';

export default function NewIncident() {
return (
<div className="new-incident-container">
    <div className="content">
        <section>
            <img style={{marginLeft:50}}src={logo} alt="logoUT" />
            <h1>Cadastrar novo caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
        
            <Link className="back-link" to="/profile">
                    < FiArrowLeft size = {16} color="E02041" />
                       Voltar para home
                </Link>
        </section>

        <form>
        <input placeholder="Título do caso" />
        <textarea placeholder="Descrição"/>
        <input placeholder="Valor em Reais" />

        
        <button type="submit" className="button"> Cadastrar </button>
        </form>
    </div>
</div>
) ;
}