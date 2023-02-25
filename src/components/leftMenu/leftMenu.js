import './leftMenu.scss';
import PillsIcon from '../img/pillsIcon.svg'
import PieIcon from '../img/leftMenuPieIcon.svg'
import DoctorIcon from '../img/leftMenuDoctorsIcon.svg'
import { LeftMenuProp } from '../props/leftMenuProp';
import WoomanIcon from '../img/leftMenuWoomanIcon.svg'
import InvalidIcon from '../img/leftMenuInvalidIcon.svg'
import PayCardIcon from '../img/leftMenuPayCardIcon.svg'
import HeadphonesIcon from '../img/leftMenuHeadphonesIcon.svg'
import HelpIcon from '../img/leftMenuQuestionIcon.svg'

export const LeftMenu = () => {
    return (
        <div className='leftMenuWrapper'>
            <div className='leftMenuWrapperContainer'>
                <div className='helthcareWrapper'>
                <div className='helthcare'>
                    <img src={PillsIcon} alt='#'></img>
                    <p className='helthcareText'>Helthcare</p>
                </div>
                </div>
                <div className='medicineContainer'>
                    <div className='medicine'>
                        <p className='medecineText'>MEDICINE</p>
                    </div>
                </div>
                <a href='/dashboard'><LeftMenuProp  img={PieIcon} innerText='Dashboard'/></a>
                <a href='/appointments'><LeftMenuProp img={HeadphonesIcon} innerText='Appointments'/></a>
                <a><LeftMenuProp img={DoctorIcon} innerText='Doctors'/></a>
                <a><LeftMenuProp img={WoomanIcon} innerText='Departments'/></a>
                <a><LeftMenuProp img={InvalidIcon} innerText='Pacients'/></a>
                <a><LeftMenuProp img={PayCardIcon} innerText='Payments'/></a>
                <div className='border'></div>
                <LeftMenuProp img={HelpIcon} innerText='Help'/>
            </div>
        </div>
    )

}