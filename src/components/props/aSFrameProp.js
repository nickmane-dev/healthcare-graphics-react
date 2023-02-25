import './aSFrameProp.scss'



export const ASFrameProp = (props) => {

    const { img = '', upTitle = '', downTitle = ''} = props;

    return (
        <div className='blockWrapper'>
            <div className='elementsBlock'>
                <div className='blockForImg'>
                    <img className='blockImg' src={img} alt="#"></img>
                </div>
                <div className='blockForText'>
                    <div className='upText'>{upTitle}</div>
                    <div className='downText'>{downTitle}</div>
                </div>
            </div>
        </div>

    )

}
