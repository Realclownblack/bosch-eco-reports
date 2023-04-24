import '../../assets/css/css-scan/BoxScan.css'
import { useState } from 'react';
import comp from '../../assets/img/img.png'
import Select from 'react-select'
import voltar from '../../assets/img/costas.png'
import {useNavigate } from 'react-router-dom';

export const BoxScan = () => {
    const navigate = useNavigate()
    const [image, setImage] = useState('');  
    const [endImg] = useState(comp);

    const uploadImage = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('image', image);
  
    }
    const voltarPage = () =>{
        navigate('/home')
    }

    const options = [
        { value: 'AGUE', label: 'Água exterior' },
        { value: 'AGUN', label: 'Água nacional' },
        { value: 'COME', label: 'Combustivel carro alugado Exterior' },
        { value: 'COMN', label: 'Combustivel carro alugado Nacional' },
        { value: 'HTEN', label: 'Hotel Nacional' },
        { value: 'HTEX', label: 'Hotel Exterior' },
        { value: 'OUTE', label: ' Outras Despesas Exterior' },
        { value: 'OUTN', label: 'Outras Despesas Nacional' }
      ]
      
    
    return (
        <div className="box-scan-div">
            <img className='button-voltar' src={voltar} alt="" onClick={voltarPage} />
         <span className="box-scan-span">
            <div className="box-scan-fotos">
                {image ? <img src={URL.createObjectURL(image)} alt="Imagem" className='box-scan-photo' /> : <img src={endImg} alt="Imagem" style={{height:'62%'}} />}
            </div>
            <form className="box-scan-button">
                <Select 
                isClearable={true}
                isSearchable={true}
                options={options} /> 
                <input className="cadastro-caixa" type="date" placeholder="Data Nacimento*" />
                <input className="button-65" id='imgUpload'  type="file" name="image" onChange={e => setImage(e.target.files[0])}/>
            </form>
            <button  className="button-65" id='enviar-button'>Enviar</button>
         </span>
        </div>

    )
}