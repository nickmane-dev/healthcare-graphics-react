import "./blockSmallGrafFrame.scss";
import SmallGraphFirst from "./moneyGrafFrameFirst";
import SmallGraphSecond from "./moneyGrafFrameSecond";



function SmallGraphs() {
    return (
        <div className="graphs_wrapper">

            <div className="graphs_wrapper_elem">
                <div className="graphs_wrapper_header">
                    <p className="hospitalH">  $ 100,000</p>
                    <div className="smallRightText">
                        <p className="textGraySmall"> Income in current month</p>

                    </div>
                </div>

                <div className="hospitalBottomSmall">
                    <SmallGraphFirst />
                </div>
            </div>
            <div className="graphs_wrapper_elem">
                <div className="graphs_wrapper_header">
                    <p className="hospitalH">  $ 25,000</p>
                    <div className="smallRightText">
                        <p className="textGraySmall"> Income in current week</p>

                    </div>
                </div>

                <div className="hospitalBottomSmall">
                    <SmallGraphSecond />
                </div>
            </div>

        </div>

    );
}

export default SmallGraphs