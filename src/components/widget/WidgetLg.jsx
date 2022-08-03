import React from "react";
import '../../css/widgetLg.css';

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <span className="widgetLgTitle">Latest Transactions</span>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                            src="https://avatars.githubusercontent.com/u/49421226?v=4"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Wade Kang</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                            src="https://avatars.githubusercontent.com/u/49421226?v=4"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Wade Kang</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                            src="https://avatars.githubusercontent.com/u/49421226?v=4"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Wade Kang</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Panding" />
                    </td>
                </tr>
            </table>
        </div>
    )
}