import './estilo.css';
import Logo from '../../imagens/logo.svg';

function logo(){
    return (
        <div className='Logo'>
            <img src={Logo} alt='Logo'></img>
            <p><strong>Alura</strong> Books</p>
        </div>
    )
}

export default logo