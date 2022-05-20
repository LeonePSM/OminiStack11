import React from "react";
import './styles.css';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import {Link} from 'react-router-dom'

import logo from '../../assets/logo UT2.png';

export default function Profile() {
return (
<div className="profile-container">
    <header>
        <img src={logo} alt="logoUT" />
        <span>Bem vinda, APAD</span>

        <Link className="button" to = "/incidents/new">Cadastrar novo caso</Link>
        <button type="button" > 
        <FiPower size={18} color= "#e02041" />
        </button>
    </header>

    <h1>Casos cadastrados</h1>

    <ul>
      <li>
        <strong>Caso</strong>
        <p>Teste</p>

        <strong>Descrição</strong>
        <p>Descrição teste</p>

        <strong>Valor</strong>
        <p>R$ 120,00</p>

        <button type ="button" >
            <FiTrash2 size={20} color="a8a8b3"/>
        </button>
      </li>

      <li>
        <strong>Caso</strong>
        <p>Teste</p>

        <strong>Descrição</strong>
        <p>Descrição teste</p>

        <strong>Valor</strong>
        <p>R$ 120,00</p>

        <button type ="button" >
            <FiTrash2 size={20} color="a8a8b3"/>
        </button>
      </li>

      <li>
        <strong>Caso</strong>
        <p>Teste</p>

        <strong>Descrição</strong>
        <p>Descrição teste</p>

        <strong>Valor</strong>
        <p>R$ 120,00</p>

        <button type ="button" >
            <FiTrash2 size={20} color="a8a8b3"/>
        </button>
      </li>

      <li>
        <strong>Caso</strong>
        <p>Teste</p>

        <strong>Descrição</strong>
        <p>Descrição teste</p>

        <strong>Valor</strong>
        <p>R$ 120,00</p>

        <button type ="button" >
            <FiTrash2 size={20} color="a8a8b3"/>
        </button>
      </li>
    </ul>
    
  </div>
) ;
}