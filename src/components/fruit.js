import React from "react";
import './fruit.css'


function Fruit(props){
    return(
        <div className="items-card">
            <div className="item-card">
                <div className="item-img">
                    <img src={props.data.img} alt="" />
                </div>
                <div className="item-details">
                    <div className="item-header">
                        <h2>{props.data.name}</h2>
                        <button>Add</button>
                    </div>
                    <div className="item-info">
                        <div className="item-info-parts">
                            <p>UOM</p>
                            <h2>{props.data.uom}</h2>
                        </div>
                        <div className="item-info-parts">
                            <p>Pack size</p>
                            <h2>{props.data.size}</h2>
                        </div>
                        <div className="item-info-parts">
                            <p>Per unit</p>
                            <h2>{props.data.unit}</h2>
                        </div>
                        <div className="item-info-parts">
                            <p>Total</p>
                            <h2>{props.data.total}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Fruit