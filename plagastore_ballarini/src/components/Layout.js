import Plaganavbar from './Navbar.js';

export const Layout = ({children}) => {
    return (
        <div className="App">
            <Plaganavbar/>
            {children}
        </div>
    );
};