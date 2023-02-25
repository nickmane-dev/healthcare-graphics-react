import './App.scss';
import { LeftMenu } from './components/leftMenu/leftMenu';
import { SearchFrame } from './components/seachFrame/searchFrame';
import { FourBlocks } from './components/afterSearchFraeme/aSFrame'
import { PacientsFrame } from './components/pacientsFrame/pacientsFrame';
import { BigPacients } from './components/bigPacients/bigPacients';
import { Page } from './components/page/page';
import { Appointments } from './components/appointments/appointments';
import { Dashboard } from './components/dashboard/dashboard';
import HospitalSurvey from './components/oneGrafFrame/HospitalSurvey';
import SmallGraphs from './components/moneyGrafFrame/blockSmallGrafFrame'
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path='/' element = {<Page />}/>
      <Route path='/dashboard' element = {<Dashboard/>}/>
      <Route path='/appointments' element ={<Appointments/>}/>
    </Routes>
    // <div className='page-wrapper'>
    //   <LeftMenu />
    //   <div className='main-wrapper'>
    //     <SearchFrame />
    //     <FourBlocks />
    //     <HospitalSurvey />
    //     <SmallGraphs />
    //     <PacientsFrame />
    //     <BigPacients />
    //   </div>
    // </div>
  );
}

export default App;
