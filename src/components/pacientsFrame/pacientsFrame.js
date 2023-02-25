import './pacientsFrame.scss';
import { PacientsProp } from '../props/pacientsProp/pacientsProp';
import FirstWooman from '../img/pacientIconOne.svg'
import SecondMan from '../img/pacientsIconTwo.svg'
import ThirdWooman from '../img/pacientIconThree.svg'
import ThourthMan from '../img/pacientIconFour.svg'
import FiveWooman from '../img/pacientIconFive.svg'
import PenIcon from '../img/pencilIcon.svg'
import TrashcanIcon from '../img/trashcanIcon.svg'




export const PacientsFrame = () => {

    // faceImg ='', nameText ='', emailText ='', dateText ='', visitTimeText ='', doctorText ='', conditionsText ='', penImg ={PenIcon}, trashcanImg={TrashcanIcon}

    return (
        <div className='pacientsWrapper'>
            <div className='pacientsContainer'>
                <div className='topText'>
                    <p className='topTextStyle'>Appointment Activity</p>
                </div>
                <div className='grayHead'>
                    <div className='grayHeadContainer'>
                        <p className='nameText'>Name</p>
                        <p className='emailText'>Email</p>
                        <p className='dateText'>Date</p>
                        <p className='visitTimeText'>Visit Time</p>
                        <p className='doctorText'>Doctor</p>
                        <p className='conditionsText'>Conditions</p>
                    </div>
                </div>
                <PacientsProp faceImg= {FirstWooman} nameText = 'Leslie Alexander' emailText='lesie.alexander@example.com' dateText = '10/10/2020' visitTimeText ='09:15-09:45am' doctorText ='Dr. Jacob Jones' conditionsText='Mumps Stage II' penImg ={PenIcon} trashcanImg={TrashcanIcon}/>
                <div className='b'></div>
                <PacientsProp faceImg= {SecondMan} nameText = 'Ronald Richards' emailText='ronald.richards@example.com' dateText = '10/12/2020' visitTimeText ='12:00-12:45pm' doctorText ='Dr. Theresa Webb' conditionsText='Depression' penImg ={PenIcon} trashcanImg={TrashcanIcon}/>
                <div className='b'></div>
                <PacientsProp faceImg= {ThirdWooman} nameText = 'Jane Cooper' emailText='jane.cooper@example.com' dateText = '10/13/2020' visitTimeText ='01:15-01:45pm' doctorText ='Dr. Jacob Jones' conditionsText='Arthritis' penImg ={PenIcon} trashcanImg={TrashcanIcon}/>
                <div className='b'></div>
                <PacientsProp faceImg= {ThourthMan} nameText = 'Robert Fox' emailText='robert.fox@gmail.com' dateText = '10/14/2020' visitTimeText ='02:00-02:45pm' doctorText ='Dr. Arlene McCoy' conditionsText='Fracture' penImg ={PenIcon} trashcanImg={TrashcanIcon}/>
                <div className='b'></div>
                <PacientsProp faceImg= {FiveWooman} nameText = 'Jenny Wilson' emailText='jenny.wilson@example.com' dateText = '10/15/2020' visitTimeText ='12:00-12:45pm' doctorText ='Dr. Esther Howard' conditionsText='Depression' penImg ={PenIcon} trashcanImg={TrashcanIcon}/>

            </div>
        </div>
    )

}



