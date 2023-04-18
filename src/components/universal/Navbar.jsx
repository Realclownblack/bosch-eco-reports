import '../../assets/css/css_universal/Navbar.css'
import imgTop from '../../assets/img/img-top.png'
import logo from '../../assets/img/bosch-eco-report.png'

export const Navbar = (props) => {
    

    return (
        <div className="navbar-div" >
            <div className='navbar-div-1'>
                <img className='navbar-div-img-1' src={imgTop} alt="" />
            </div>
            <div className='navbar-div-2'>
                <img style={{height:'30px'}} src={logo} alt="" />   
            </div>
        </div>
    )
}