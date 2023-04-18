import '../../assets/css/css-scan/BoxScan.css'
import { useState } from 'react';
import foto from '../../assets/img/camera.png'
import comp from '../../assets/img/helpjuice_production_uploads_upload_image_6769_direct_1606243372444-rtaImage.png'
import { Navbar } from '../universal/Navbar';

export const BoxArquivados = () => {
    const [file, setFile] = useState({})

    const handleFileChange = (e) => {
        console.log(e)
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    };
    
    return (
        <div className="box-scan-div">
         <span className="box-scan-span">
            <div className="box-scan-fotos">
                <span className='span-foto'><img src={comp} style={{width: '100%', height: '100%'}} alt="" /></span>
            </div>
         </span>
        </div>

    )
}