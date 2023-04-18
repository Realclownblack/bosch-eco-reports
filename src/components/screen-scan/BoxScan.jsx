import '../../assets/css/css-scan/BoxScan.css'
import { useState } from 'react';
import comp from '../../assets/img/photo.png'

export const BoxScan = () => {
    const [image, setImage] = useState('');  
    const [endImg] = useState(comp);

    const uploadImage = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('image', image);
  
    }
    
    return (
        <div className="box-scan-div">
         <span className="box-scan-span">
            <div className="box-scan-fotos">
                {image ? <img src={URL.createObjectURL(image)} alt="Imagem" className='box-scan-photo' /> : <img src={endImg} alt="Imagem" style={{height:'62%'}} />}
            </div>
            <div className="box-scan-button">
                <input className="button-65"  type="file" name="image" onChange={e => setImage(e.target.files[0])}/>
            </div>
         </span>
        </div>

    )
}