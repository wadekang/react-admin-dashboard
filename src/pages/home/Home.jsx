import React from "react";
import Chart from "../../components/chart/Chart";
import FeautredInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widget/WidgetLg";
import WidgetSm from "../../components/widget/WidgetSm";
import '../../css/home.css';
import { userData } from "../../dummyData";

export default function Home() {
    return (
        <div className="home">
            <FeautredInfo />
            <Chart 
                data={userData}
                title="User Analystics"
                grid
                dataKey="Active User"
            />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}