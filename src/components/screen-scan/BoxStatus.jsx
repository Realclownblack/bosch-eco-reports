import '../../assets/css/css-scan/BoxStatus.css'
import { Navbar } from '../universal/Navbar';
import voltar from '../../assets/img/costas.png'
import {useNavigate } from 'react-router-dom';

export const BoxStatus = () => {
    const navigate = useNavigate()
    const voltarPage = () =>{
        navigate('/home')
    }

    return (
        <div className="box-status-div">
            <Navbar/>
            <img className='button-voltar' src={voltar} alt="" onClick={voltarPage} />
            <p className='status-titulo'>Status De pedidos </p>
            <span className="box-status-span">
                <span className="box-status">
                    <p>Order 455444</p>
                    <p>23.02.23 a 22.03.23</p>
                    <span className="box-status-cor">
                        <p>status</p>
                        <div className="box-status-cor-01"></div>
                    </span>
                </span>
                <span className="box-status">
                    <p>Order 455442</p>
                    <p>23.02.23 a 22.03.23</p>
                    <span className="box-status-cor">
                        <p>status</p>
                        <div className="box-status-cor-02"></div>
                    </span>                    
                </span>
                <span className="box-status">
                    <p>Order 455447</p>
                    <p>23.05.23 a 22.08.23</p>
                    <span className="box-status-cor">
                        <p>status</p>
                        <div className="box-status-cor-02"></div>
                    </span>                    
                </span>
                <span className="box-status">
                    <p>Order 455444</p>
                    <p>23.02.23 a 22.03.23</p>
                    <span className="box-status-cor">
                        <p>status</p>
                        <div className="box-status-cor-01"></div>
                    </span>
                </span>
                <span className="box-status">
                    <p>Order 455444</p>
                    <p>23.02.23 a 22.03.23</p>
                    <span className="box-status-cor">
                        <p>status</p>
                        <div className="box-status-cor-01"></div>
                    </span>
                </span>
                <span className="box-status">
                    <p>Order 455444</p>
                    <p>23.02.23 a 22.03.23</p>
                    <span className="box-status-cor">
                        <p>status</p>
                        <div className="box-status-cor-01"></div>
                    </span>
                </span>
                <span className="box-status">
                    <p>Order 455444</p>
                    <p>23.02.23 a 22.03.23</p>
                    <span className="box-status-cor">
                        <p>status</p>
                        <div className="box-status-cor-01"></div>
                    </span>
                </span>
                <span className="box-status">
                    <p>Order 455444</p>
                    <p>23.02.23 a 22.03.23</p>
                    <span className="box-status-cor">
                        <p>status</p>
                        <div className="box-status-cor-01"></div>
                    </span>
                </span>
                <span className="box-status">
                    <p>Order 455444</p>
                    <p>23.02.23 a 22.03.23</p>
                    <span className="box-status-cor">
                        <p>status</p>
                        <div className="box-status-cor-01"></div>
                    </span>
                </span>
                <span className="box-status">
                    <p>Order 455444</p>
                    <p>23.02.23 a 22.03.23</p>
                    <span className="box-status-cor">
                        <p>status</p>
                        <div className="box-status-cor-01"></div>
                    </span>
                </span>
                <span className="box-status">
                    <p>Order 455444</p>
                    <p>23.02.23 a 22.03.23</p>
                    <span className="box-status-cor">
                        <p>status</p>
                        <div className="box-status-cor-01"></div>
                    </span>
                </span>
                <span className="box-status">
                    <p>Order 455444</p>
                    <p>23.02.23 a 22.03.23</p>
                    <span className="box-status-cor">
                        <p>status</p>
                        <div className="box-status-cor-01"></div>
                    </span>
                </span>

                <span className="box-status">
                    <p>Order 455444</p>
                    <p>23.02.23 a 22.03.23</p>
                    <span className="box-status-cor">
                        <p>status</p>
                        <div className="box-status-cor-01"></div>
                    </span>
                </span>
                <span className="box-status">
                    <p>Order 455442</p>
                    <p>23.02.23 a 22.05.23</p>
                    <span className="box-status-cor">
                        <p>status</p>
                        <div className="box-status-cor-02"></div>
                    </span>                    
                </span>

            </span>
        </div>

    )
}