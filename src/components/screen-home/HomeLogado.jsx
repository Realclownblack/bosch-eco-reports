import '../../assets/css/css-home/HomeLogado.css'
import {useNavigate } from 'react-router-dom';
import user from '../../assets/img/user.svg'
import logoff from '../../assets/img/logout.svg'

import img1 from '../../assets/img/female-working-on-laptop-green.svg'
import img2 from '../../assets/img/male-pointing-to-something-on-flipchart-green.svg'

export const HomeLogado = () => {
    var userName = localStorage.getItem("userBosch");
    const navigate = useNavigate()

    const logoffUser = () => {
        navigate('/')
        localStorage.removeItem("userBosch");
    }

    return (
        <div className="box-home-div">
            <span className="box-home-span-user">
                <div className="box-home-span-user-div">
                    <p className='box-home-user-name'>Olá, {userName} ;)</p>
                    <span style={{display: 'flex'}}>
                        <button className='box-home-button-icon'><img style={{width: '29px'}} src={user} alt="" /> </button>
                        <button className='box-home-button-icon'><img style={{width: '29px'}} src={logoff} alt=""  onClick={logoffUser}/></button>                 
                    </span> 
                </div>
            </span>            
           <span className="box-home-span">
                <img src={img1} alt="" style={{width:'250px'}} id='img-logado' />
                <span className="box-home-span-button">
                    <button onClick={() => navigate('/anexar')} className="box-home-button">Anexar novo comprovante</button>
                    <button onClick={() => navigate('/arquivados')} className="box-home-button">Comprovantes Arquivados</button>
                    <button onClick={() => navigate('/status')} className="box-home-button">Acompanhar Comprovantes Enviados</button>
                </span>
                <img src={img2} alt="" style={{width:'250px'}} id='img-logado'/>
           </span>
        </div>

    )
}