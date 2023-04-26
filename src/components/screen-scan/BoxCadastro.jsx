import '../../assets/css/css-scan/BoxCadastro.css'
import Select from 'react-select'
import voltar from '../../assets/img/costas.png'
import {useNavigate } from 'react-router-dom';

export const BoxCadastro = () => {
    const navigate = useNavigate()

    const voltarPage = () =>{
        navigate('/')
    }

    const options = [
        { value: 'pt', label: 'pt' },
      ]
      
    
    return (
        <div className="box-scan-div">
            <img className='button-voltar' src={voltar} alt="" onClick={voltarPage} />
         <span className="box-scan-span">
            <form className="box-cadastro-forms">
                <Select placeholder='Centro de Custo'
                className='cadastro-caixa-cadastro-select'
                isClearable={true}
                isSearchable={true}
                options={options} required/> 
                <input className="cadastro-caixa-cadastro" type="userBosch" placeholder="User name*" required />
                <input className="cadastro-caixa-cadastro" type="EdvBosch" placeholder="User name*" required/>
                <input className="cadastro-caixa-cadastro" type="passwordBosch" placeholder="Password*" required/>
                <input className="cadastro-caixa-cadastro" type="passwordReaptBosch" placeholder="Reapt Password*" required/>
                <button  type='submit'  className="button-65" id='enviar-button'>Enviar</button>
            </form>
         </span>
        </div>

    )
}