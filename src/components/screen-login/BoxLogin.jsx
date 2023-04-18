import '../../assets/css/css-login/BoxLogin.css'
import boschLogo from '../../assets/img/bosch-eco-report.png'
import userImg from '../../assets/img/id-do-rosto.png'
import passImg from '../../assets/img/lock-closed.svg'
import edvImg from '../../assets/img/carteira-de-identidade.png'

export const BoxLogin = () => {
    function onSubmit() {
        navigate('/home')
    }
    return (
        <div className="box-login-div">
            <span className="box-login-login">
                <img src={boschLogo} style={{width:'217px'}} alt="" />
                <form onSubmit={onSubmit} className="box-login-form">
                    <span className="box-login-input-span">
                        <div className="box-login-input-user">
                            <img src={userImg} style={{width:'26px',marginRight:'12px'}} alt="" />
                            <input className="box-login-input" type="text" name="userBosch" required placeholder='User Bosch' />
                        </div>
                        <div className="box-login-input-fake"></div>
                    </span>
                    <span className="box-login-input-span">
                        <div className="box-login-input-user">
                            <img src={edvImg} style={{width:'30px',marginRight:'12px'}} alt="" />
                            <input className="box-login-input" type="text" name="edvBosch" required maxlength="10" min="8" placeholder='Edv Bosch' />
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
                    <button type='submit' className='box-login-button'>ENTRAR</button>
                </form>
            </span>            
        </div>

    )
}