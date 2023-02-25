import './aSFrame.scss';
import { ASFrameProp } from '../props/aSFrameProp'
import MedKitIcon from '../img/medKitIcon.svg'
import InvalidIcon from '../img/invalidPersonIcon.svg'
import OperationIcon from '../img/operationTableIcon.svg'
import BankIcon from '../img/bankIcon.svg'


export const FourBlocks = () =>{

    return(
        <div className='blockContainer'>
            <div className='blockContainerFourContainers'>
                <ASFrameProp img = {MedKitIcon} upTitle = 'Appointments' downTitle = '213'/>
                <ASFrameProp img = {InvalidIcon} upTitle = 'New Patients' downTitle = '104'/>
                <ASFrameProp img = {OperationIcon} upTitle = 'Operations' downTitle = '24'/>
                <ASFrameProp img = {BankIcon} upTitle = 'Hospital Earnings' downTitle = '$ 12,174'/>
            </div>
        </div>
    )

}
