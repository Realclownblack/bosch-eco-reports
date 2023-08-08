import '../../assets/css/css_universal/Navbar.css'
import imgTop from '../../assets/img/imgTopo.png'
import boschLogo from '../../assets/img/icone.png'
export const Navbar = (props) => {
    

    return (
        <div className="navbar-div" >
            <div className='navbar-div-1'>
                <img className='navbar-div-img-1' src={imgTop} alt="" />
            </div>
            <div className='navbar-div-2'>
                <img style={{height:'30px'}} src={boschLogo} alt="" />   
            </div>
        </div>
    )
}