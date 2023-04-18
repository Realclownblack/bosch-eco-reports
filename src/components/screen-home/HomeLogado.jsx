import '../../assets/css/css-home/HomeLogado.css'
import {useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import user from '../../assets/img/user.svg'
import logoff from '../../assets/img/logout.svg'

export const HomeLogado = () => {
    const navigate = useNavigate()
    const [_params, _] = useSearchParams();
    let params = {};

    for (const [key, value] of _params) {
        params[key] = value;
    }
    console.log(params)
    return (
        <div className="box-home-div">
            <span className="box-home-span-user">
                <div className="box-home-span-user-div">
                    <p className='box-home-user-name'>Ola,{params.userBosch};)</p>
                    <span style={{display: 'flex'}}>
                        <button className='box-home-button-icon'><img style={{width: '29px'}} src={user} alt="" /> </button>
                        <button className='box-home-button-icon'><img style={{width: '29px'}} src={logoff} alt="" /></button>                 
                    </span> 

                </div>
            </span>            
           <span className="box-home-span">

                <span className="box-home-span-button">
                    <button onClick={() => navigate('/anexar')} className="box-home-button">Anexar novo comprovante</button>
                    <button onClick={() => navigate('/arquivados')} className="box-home-button">Comprovantes Arquivados</button>
                    <button onClick={() => navigate('/status')} className="box-home-button">Acompanhar Comprovantes Enviados</button>
                </span>
           </span>
        </div>

    )
}