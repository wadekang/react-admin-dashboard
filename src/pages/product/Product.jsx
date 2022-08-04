import React from "react";
import '../../css/product.css';
import { Link } from 'react-router-dom';
import { productData } from "../../dummyData";
import Chart from "../../components/chart/Chart";
import { Publish } from "@mui/icons-material";

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img 
                            className="productInfoImg"
                            src='https://images.pexels.com/photos/7205060/pexels-photo-7205060.jpeg?cs=srgb&dl=pexels-levi-loot-7205060.jpg&fm=jpg'
                            alt=""
                        />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id: </span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales: </span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active: </span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock: </span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpod" />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                        <img 
                            className="productUploadImg"
                            src='https://images.pexels.com/photos/7205060/pexels-photo-7205060.jpeg?cs=srgb&dl=pexels-levi-loot-7205060.jpg&fm=jpg'
                            alt=""
                        />
                        <label for="file">
                            <Publish className="productUploadIcon" />
                        </label>
                        <input type="file" id="file" style={{ display: 'none' }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}