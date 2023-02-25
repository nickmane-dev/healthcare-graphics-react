import './searchFrame.scss';
import SearchIcon from '../img/searchIcon.svg';
import BellIcon from '../img/bellIcon.svg';
import SphereIcon from '../img/circleIcon.svg';
import ManIcon from '../img/searchFrameMan.svg'

export const SearchFrame = () => {
    return (

        <div className='searchFrameWrapper'>
            <div className='searchPanel'>
                <div className='searchForm'>
                    <button className='searchFormBtn'><img className='searchFormImg' src={SearchIcon} alt="#"></img></button>
                    <input className='searchFormText' type={Text} placeholder="Search"></input>
                </div>

                <div className='searchPanelBellAndImg'>
                    <div className='imgContainer'>
                        <div className='countConainer'>
                            <p className='countText'>1</p>
                        </div>
                    </div>
                    <div className='photoContainer'>
                        <button className='manButton'><img src={ManIcon} alt='#'></img></button>
                    </div>
                </div>
            </div>
        </div>

    )

}
