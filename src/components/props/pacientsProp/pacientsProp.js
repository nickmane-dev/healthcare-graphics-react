import './pacientsProp.scss';
import PenIcon from '../../img/pencilIcon.svg'
import TrashcanIcon from '../../img/trashcanIcon.svg'

export const PacientsProp = (props) => {
    
    const {faceImg ='', nameText ='', emailText ='', dateText ='', visitTimeText ='', doctorText ='', conditionsText ='', penImg ={PenIcon}, trashcanImg={TrashcanIcon}} = props;

    return(
        <div className='pacientsInfoWrapper'>
            <div className='pacientsInfoContainer'>
                <div className='pacientsInfo'>
                    <div className='imgAndName'>
                        <img className='faceImg' src={faceImg} alt='#'></img>
                        <p className='nameTextInside'>{nameText}</p>
                    </div>
                    <div className='email'>
                        <p className='emailTextInside'>{emailText}</p>
                    </div>
                    <div className='date'>
                        <p className='dateTextInside'>{dateText}</p>
                    </div>
                    <div className='visitTime'>
                        <p className='visitTimeTextInside'>{visitTimeText}</p>
                    </div>
                    <div className='doctor'>
                        <p className='doctorTextInside'>{doctorText}</p>
                    </div>
                    <div className='conditions'>
                        <p className='conditionsTextInside'>{conditionsText}</p>
                    </div>
                    <div className='penAndTrashcan'>
                        <img className='penIcon' src={penImg} alt ='#'></img>
                        <img className='trashcanIcon' src={trashcanImg} alt='#'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}