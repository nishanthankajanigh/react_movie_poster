
import { Outlet, Link } from "react-router-dom";
import LOGO from '../assets/LOGO.png'; 





const Layout = () => {
    return (
        <>
       
        <img src={LOGO} alt="Logo" />;
        <p class="mainheading">MAD CINI-CLUB</p>    
       
        
            <nav>
                        
                    <Link to="/">Home</Link>
                
                
                    <Link to="/Movie">Movies</Link>
            
                
                    <Link to="/Contact">About-Us </Link>
                
                
                    <Link to="/Bookings">Bookings</Link>
            
            
        </nav>
        <p class="home_p" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna eget est lorem. Sem et tortor consequat id porta nibh venenatis cras. Etiam dignissim diam quis enim. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus.  laoreet non curabitur gravida arcu ac. Pellentesque habitant morbi tristique senectus. Arcu non sodales neque sodales. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. In mollis nunc sed id. Dui ut ornare lectus sit amet est placerat. Maecenas ultricies mi eget mauris pharetra et ultrices.

Dolor sed fusce placerat. Blandit cursus risus at ultrices. Vulputate dignissim suspendisse in est ante in. Egestas quis ipsum suspendisse ultrices gravida. Consectetur purus ut </p>
        
        <Outlet />
        
    </>
    )
};

export default Layout;



