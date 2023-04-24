import '../../assets/css/css-scan/BoxScan.css'
import { useState } from 'react';
import comp from '../../assets/img/helpjuice_production_uploads_upload_image_6769_direct_1606243372444-rtaImage.png'
import voltar from '../../assets/img/costas.png'
import {useNavigate } from 'react-router-dom';

export const BoxArquivados = () => {
  const navigate = useNavigate()
  const [file, setFile] = useState({})

  const voltarPage = () =>{
    navigate('/home')
  }

  return (
      <div className="box-scan-div">
        <img className='button-voltar' src={voltar} alt="" onClick={voltarPage} />
        <span className="box-scan-span">
          <div className="box-scan-fotos">
              <span className='span-foto'><img src={comp} style={{width: '100%', height: '100%'}} alt="" /></span>
          </div>
        </span>
      </div>

  )
}