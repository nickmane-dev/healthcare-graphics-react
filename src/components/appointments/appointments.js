import './appointments.scss'
import { LeftMenu } from '../leftMenu/leftMenu';
import { SearchFrame } from '../seachFrameCostil/searchFrameCostil';
import { BigPacients } from '../bigPacients/bigPacients'; 
import React from 'react';


export const Appointments = () => {
    return (
        <div className='page-wrapperA'>
            <LeftMenu />
            <div className='main-wrapperA'>
                <SearchFrame />
                <BigPacients/>
            </div>
        </div>
    )
}   