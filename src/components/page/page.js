import './page.scss';
import { LeftMenu } from '../leftMenu/leftMenu';
import { SearchFrame } from '../seachFrame/searchFrame';
import { FourBlocks } from '../afterSearchFraeme/aSFrame'
import { PacientsFrame } from '../pacientsFrame/pacientsFrame';
import HospitalSurvey from '../oneGrafFrame/HospitalSurvey';
import SmallGraphs from '../moneyGrafFrame/blockSmallGrafFrame'
import React from 'react';


export const Page = () => {
    return (
        <div className='page-wrapper'>
            <LeftMenu />
            <div className='main-wrapper'>
                <SearchFrame />
                <FourBlocks />
                <HospitalSurvey />
                <SmallGraphs />
                <PacientsFrame />
            </div>
        </div>
    )
}   