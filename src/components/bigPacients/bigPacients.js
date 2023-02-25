import './bigPacients.scss'
import { PacientsProp } from '../props/pacientsProp/pacientsProp';
import FirstWooman from '../img/pacientIconOne.svg'
import SecondMan from '../img/pacientsIconTwo.svg'
import ThirdWooman from '../img/pacientIconThree.svg'
import ThourthMan from '../img/pacientIconFour.svg'
import FiveWooman from '../img/pacientIconFive.svg'
import PenIcon from '../img/pencilIcon.svg'
import TrashcanIcon from '../img/trashcanIcon.svg'
import FirstHuman from '../img/HumanOne.svg'
import SecondHuman from '../img/HumanTwo.svg'
import TherdHuman from '../img/HumanThree.svg'
import FourhHuman from '../img/HumanFour.svg'
import FiveHuman from '../img/HumanFive.svg'
import LeftArrow from '../img/leftArrow.svg'
import RightArrow from '../img/rightArrow.svg'


export const BigPacients = () => {

    return (
        <div className='bpacientsWrapper'>
            <div className='btopText'>
                <p className='btopTextStyle'>Appointments</p>
            </div>
            <div className='bpacientsContainer'>
                <div className='bgrayHead'>
                    <div className='bgrayHeadContainer'>
                        <p className='bnameText'>Name</p>
                        <p className='bemailText'>Email</p>
                        <p className='bdateText'>Date</p>
                        <p className='bvisitTimeText'>Visit Time</p>
                        <p className='bdoctorText'>Doctor</p>
                        <p className='bconditionsText'>Conditions</p>
                    </div>
                </div>
                <PacientsProp faceImg={FirstWooman} nameText='Leslie Alexander' emailText='lesie.alexander@example.com' dateText='10/10/2020' visitTimeText='09:15-09:45am' doctorText='Dr. Jacob Jones' conditionsText='Mumps Stage II' penImg={PenIcon} trashcanImg={TrashcanIcon} />
                <div className='bb'></div>
                <PacientsProp faceImg={SecondMan} nameText='Ronald Richards' emailText='ronald.richards@example.com' dateText='10/12/2020' visitTimeText='12:00-12:45pm' doctorText='Dr. Theresa Webb' conditionsText='Depression' penImg={PenIcon} trashcanImg={TrashcanIcon} />
                <div className='bb'></div>
                <PacientsProp faceImg={ThirdWooman} nameText='Jane Cooper' emailText='jane.cooper@example.com' dateText='10/13/2020' visitTimeText='01:15-01:45pm' doctorText='Dr. Jacob Jones' conditionsText='Arthritis' penImg={PenIcon} trashcanImg={TrashcanIcon} />
                <div className='bb'></div>
                <PacientsProp faceImg={ThourthMan} nameText='Robert Fox' emailText='robert.fox@gmail.com' dateText='10/14/2020' visitTimeText='02:00-02:45pm' doctorText='Dr. Arlene McCoy' conditionsText='Fracture' penImg={PenIcon} trashcanImg={TrashcanIcon} />
                <div className='bb'></div>
                <PacientsProp faceImg={FiveWooman} nameText='Jenny Wilson' emailText='jenny.wilson@example.com' dateText='10/15/2020' visitTimeText='12:00-12:45pm' doctorText='Dr. Esther Howard' conditionsText='Depression' penImg={PenIcon} trashcanImg={TrashcanIcon} />
                <div className='bb'></div>
                <PacientsProp faceImg={FirstHuman} nameText='Marshall Cook' emailText='marshall.cook@example.com' dateText='10/17/2020' visitTimeText='01:15-01:45pm' doctorText='Dr. Jacob Jones' conditionsText='Dyslexia' penImg={PenIcon} trashcanImg={TrashcanIcon} />
                <div className='bb'></div>
                <PacientsProp faceImg={SecondHuman} nameText='Stephanie Cook' emailText='stephanie.cook@example.com' dateText='10/17/2020' visitTimeText='02:00-02:45pm' doctorText='Dr. Theresa Webb' conditionsText='Hypothermia' penImg={PenIcon} trashcanImg={TrashcanIcon} />
                <div className='bb'></div>
                <PacientsProp faceImg={TherdHuman} nameText='Marion Jamesr' emailText='marion.james@example.com' dateText='10/18/2020' visitTimeText='09:15-09:45am' doctorText='Dr. Esther Howard' conditionsText='Sunburn' penImg={PenIcon} trashcanImg={TrashcanIcon} />
                <div className='bb'></div>
                <PacientsProp faceImg={FourhHuman} nameText='Teresa Holland' emailText='teresa.holland@example.com' dateText='10/19/2020' visitTimeText='12:00-12:45pm' doctorText='Dr. Arlene McCoy' conditionsText='Diarrhoea' penImg={PenIcon} trashcanImg={TrashcanIcon} />
                <div className='bb'></div>
                <PacientsProp faceImg={FiveHuman} nameText='Zachary Marshall' emailText='zachary.marshall@example.com' dateText='10/20/2020' visitTimeText='09:15-09:45am' doctorText='Dr. Arlene McCoy' conditionsText='Arthritis' penImg={PenIcon} trashcanImg={TrashcanIcon} />
                <div className='bb'></div>
                <div className='pagesPanelWrapper'>
                    <div className='contentWrapper'>
                        <div className='pagesPanelContainer'>
                            <button className='leftButton'><img src={LeftArrow}></img></button>
                            <button className='firstButton'><p className='buttonNumber fristNum'>1</p></button>
                            <button className='secondButton'><p className='buttonNumber'>2</p></button>
                            <button className='ThirdButton'><p className='buttonNumber'>3</p></button>
                            <button className='rightButton'><img src={RightArrow}></img></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}