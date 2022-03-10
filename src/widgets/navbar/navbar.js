import { Fragment,useState } from 'react';
import navStyles from './style.module.css';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [sidebar, setSidebar] = useState(false);

    const toggleHamburger=()=>{
        // setNavbar(!navbar  )
        setSidebar(!sidebar)
    }
    return (

        <Fragment>
            <center>
            <nav className={navbar ? `${navStyles.navbar} ${navStyles.bg_nav}` : `${navStyles.navbar}` }>
                <div>
                <h1>Greensock</h1>
                </div>
                <div className={sidebar?`${navStyles.hamBurger} ${navStyles.change}`:navStyles.hamBurger} onClick={toggleHamburger}>
                    <div className={navStyles.menu}>
                        <div className={navStyles.bar1}></div>
                        <div className={navStyles.bar2}></div>
                        <div className={navStyles.bar3}></div>
                    </div>
                </div>
            </nav>
            </center>
        </Fragment>
    )
}

export default Navbar