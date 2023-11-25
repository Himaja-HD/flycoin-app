import React from "react";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './kyc.styles.css';



function Know () {
    const [coin , setCoin] =useState('')
    const [img , setImg] = useState('')
    const [name , setName] = useState('')
    const [symbol , setSymbol] = useState('')
    const [link , setLink] = useState('')
    const [inr , setInr] = useState('')
    const [usd , setUsd] = useState('')
    const [desc,setDesc] = useState('')

    const handleSubmit=() => {
        const url="https://api.coingecko.com/api/v3/coins/" + coin;

         axios.get(url)
        .then(res => {
         const resData =res.data
         setImg(resData.image.large)
         setName(resData.name)
         setSymbol(resData.symbol)
         setLink(resData.links.homepage[0])
         setInr("Indian price: ₹"+resData.market_data.current_price.inr)
         setUsd("USD: $"+resData.market_data.current_price.usd)
         setDesc(JSON.stringify(resData.description.en))
         
        });
    

    }

    return(
        <div>
            <h4 className="kyc-header p-2 ">Know your Coin</h4>
            <div className="d-flex justify-content-center">
                <div className="col-md-4 mt-5">
                    <input type="text" className="form-control"
                    value={coin} 
                    onChange={(e) => setCoin(e.target.value)}
                    placeholder="Enter the Coin Name" required/>
                </div>
            
            </div>
            <button onClick={handleSubmit} className="btn px-5 mt-4">Submit</button>

            <div className=" mt-5 container-fuild d-flex justify-content-center">
                <div className="m1 col-md-4 p-2 rounded" >
                    <img src={img} alt="" width="80"/>

                    <br/>
                    <h3 className="text-white">{ name }</h3>
                    <h4>{  symbol  }</h4>
                    <h5><a className="link-coin text-white" href={ link }>{ link }</a></h5>
                <br/>
                <h6>{ inr}</h6>
                <h6>{ usd }</h6>
                </div>
            <div className="d1 col-md-8 my-auto">
                {desc}
            </div>
            </div>
        </div>
    );
}
export default Know;