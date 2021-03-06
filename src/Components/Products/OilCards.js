import React,{useState} from 'react';
import 'tachyons';
import img from './background.jpg';
import './Oilcard.css';
import {ProdutsContent} from './oilnames.js';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from "react-icons/fi";

const OilCards = ({showProducts}) => {
  const[items,setItems]=useState(ProdutsContent);

    return (
      <>
      <div style={{paddingTop:70}}>
        <div className="backgroundimg">
           <h1 className="white tc pt4 pointer" style={{fontWeight:'bold'}}> Categories </h1>
          <p className="f3 white tc fw5 pointer"  >Home > <span style={{color:'#fa741b'}}> Categories</span></p>
				</div>
				  <h1 className="tc fw5"> Products </h1>
					<p className="tc f4 line" style={{color:'#585a59'}}> The products our company provides are hello and welcome back to my youtuve channel hello and welcome back to my youtuve channel</p>

				<div className="flex flex-wrap">
          {
            items.map((data)=>{
              return(
                <div className="flex pl2 bw3 bl mt5 ml5 shadow-2 prod" style={{borderLeftColor:'#fa741b'}}>
                  <img src={data.img} height="270 "width="270"/>
                  <div>
                     <p className="f3 fw5 tc mt4">{data.title}</p>
                     <p className="ma3 mb5">{data.description}</p>
                     <div className="mb4 ml4">
                     <Link to='/Productdets' onClick={()=>showProducts(`${data.name}`)} className="f5 fw4 pa2 br4 white check grow" style={{textDecoration: 'none',backgroundColor:'#fa741b',color:'white'}} >Check out
                    <FiArrowRightCircle size="1.5rem" color="white" className="pl1"/>
                    </Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
				</div>
		  </div>
</>
);
}

export default OilCards;
