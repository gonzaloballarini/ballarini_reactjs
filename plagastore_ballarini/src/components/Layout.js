//Este componente layout es que va a nuclear aquellas cosas que se van a repetir en todos los html por igual. 

import Plaganavbar from './Navbar.js';

export const Layout = ({children}) => {
    return (
        <div className="App">
            <Plaganavbar/>
            {children}
        </div>
    );
};