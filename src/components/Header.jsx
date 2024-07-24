import { Link } from 'react-router-dom';


const Header = () => (
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/history">History</Link>
            <Link to="/myths">Myths</Link>
            <Link to="/resources">Resources</Link>
        </nav>      
    </header>
);

export default Header;