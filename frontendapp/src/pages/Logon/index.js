import React, {useState} from 'react';
import './styles.css';
import capaUT from '../../assets/Capa UT2.jpg';
import logo from '../../assets/logo UT2.png';
import { FiLogIn } from 'react-icons/fi';
import {Link, useNavigate} from 'react-router-dom';
import api from '../../services/api';


export default function Logon() {
    const [id,setId] = useState('');
    
    const history = useNavigate ();

    async function handleLogin (e) {
        e.preventDefault();
    

   try{
    const response = await api.post('sessions', {id});

    localStorage.setItem('ongId',  id);
    localStorage.setItem('ongName',  response.data.name);

    history("/profile", { replace: true });

   } catch(err) {
    alert('Falha no login, tente novamente');
   }
}
    
    
    
    
    
    return (
        <div className="logon-container">
            <section className="form">
            <img style={{marginLeft:60, marginTop:35}}src={logo} alt="logoUT" />
             <form onSubmit={handleLogin}>
                <h1> Faça seu Logon </h1>

             <input placeholder = "Sua ID"
             value = {id}
             onChange={e => setId(e.target.value)}
             /> 
             <button className="button" type="submit" to="/profile">Entrar
             
             </button>

                <Link className="back-link" to="/register">
                    <FiLogIn size = {16} color="E02041" />
                        Não tenho Cadastro
                </Link>
             </form>
            </section>
           
            <img className="img-capa" src={capaUT} alt="Capa" />
        </div>
    );
}