import './leftMenuProps.scss';
import { Link } from 'react-router-dom';

export const LeftMenuProp = (props) => {
    
    const{img='',innerText='', styledImg=''} = props;
    
    return (
        <div className='containerWrapper'>
            <div className='container'>
                <img src={img} className={styledImg} alt='#'></img>
                <p className='containerText'>{innerText}</p>
            </div>
        </div>

    )

}
