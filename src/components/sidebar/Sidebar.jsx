import React from "react";
import '../../css/sidebar.css'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { BarChartOutlined, Feedback, LocalAtmOutlined, MailOutline, Message, PersonOutline, StorefrontOutlined } from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <HomeWorkIcon className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon" />
                            Analystics
                        </li>
                        <li className="sidebarListItem">
                            <MonetizationOnIcon className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PersonOutline className="sidebarIcon"/>
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <StorefrontOutlined className="sidebarIcon" />
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <LocalAtmOutlined className="sidebarIcon" />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChartOutlined className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Feedback className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <Message className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}