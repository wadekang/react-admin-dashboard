import React from "react";
import '../../css/widgetSm.css';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Member</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img 
                        src="https://avatars.githubusercontent.com/u/49421226?v=4"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Wade Kang</span>
                        <span className="widgetSmUserTitle">Backend Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img 
                        src="https://avatars.githubusercontent.com/u/49421226?v=4"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Wade Kang</span>
                        <span className="widgetSmUserTitle">Backend Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img 
                        src="https://avatars.githubusercontent.com/u/49421226?v=4"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Wade Kang</span>
                        <span className="widgetSmUserTitle">Backend Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}