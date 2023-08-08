import '../../assets/css/css-login/BoxLogin.css'
import React, { useState } from 'react';
import boschLogo from '../../assets/img/icone.png'
import userImg from '../../assets/img/id-do-rosto.png'
import passImg from '../../assets/img/lock-closed.svg'
import edvImg from '../../assets/img/carteira-de-identidade.png'
import {useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export const BoxLogin = () => {
    const navigate = useNavigate()
    const [valor, setValor] = useState('');
    function onSubmit() {
        navigate('/home')
        localStorage.setItem("userBosch",valor);
        notifySuccess()
    }
    const Cadastro = () =>{
        navigate('/cadastro-user')
    }

    const handleChange = (event) => {
        setValor(event.target.value);
      };


    const notifySuccess = () => toast.success('Logado  Com Success', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return (
        <div className="box-login-div">
            <span className="box-login-login">
                <img src={boschLogo} style={{width:'217px'}} alt="" />
                <form onSubmit={onSubmit} className="box-login-form">
                    <span className="box-login-input-span">
                        <div className="box-login-input-user">
                            <img src={userImg} style={{width:'26px',marginRight:'12px'}} alt="" />
                            <input className="box-login-input" value={valor} onChange={handleChange} type="text" name="userBosch" required placeholder='User Bosch' />
                        </div>
                        <div className="box-login-input-fake"></div>
                    </span>
                    <span className="box-login-input-span">
                        <div className="box-login-input-user">
                            <img src={edvImg} style={{width:'30px',marginRight:'12px'}} alt="" />
                            <input className="box-login-input" type="text" name="edvBosch" required maxlength="10" min="8" placeholder='EDV Bosch' />
                        </div>
                        <div className="box-login-input-fake"></div>
                    </span>
                    <span className="box-login-input-span">
                        <div className="box-login-input-user">
                            <img src={passImg} style={{width:'30px',marginRight:'12px'}} alt="" />
                            <input className="box-login-input" type="password" name="password" required maxlength="10" min="8" placeholder='Password' />
                        </div>
                        <div className="box-login-input-fake"></div>
                    </span>
                    <button className='box-login-register' onClick={Cadastro}>Register</button>
                    <button type='submit' className='box-login-button'>ENTRAR</button>
                </form>
            </span>            
        </div>

    )
}