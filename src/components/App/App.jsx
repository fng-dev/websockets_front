import { Link } from 'react-router-dom';
import defaultImg from '../../assets/img/app.svg';
import './App.scss';
const App = (props) => {
    const { name, img, color, route } = props;

    return (
        <Link to={route}>
            <div className={color ? `app-content ${color}` : `app-content`}>
                <img src={img ? img : defaultImg} alt="img" />
                <span>{name ? name : 'APP'}</span>
            </div>
        </Link>
    )
}

export default App