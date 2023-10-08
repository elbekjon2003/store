import React from "react";
import './App.css'
import Fruit from "./components/fruit";
import Header from "./components/header";


const data = [
  {id: 1,name: 'Apple', img: 'https://s1.1zoom.me/big0/390/Apples_Closeup_Two_White_490120.jpg', uom: '02', size: '02', unit: '$8.99', total: '$8.99'},
  {id: 2,name: 'Banana', img: 'https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696636800&semt=sph', uom: '02', size: '02', unit: '$8.99', total: '$8.99'},
  {id: 3,name: 'Orange', img: 'https://media.istockphoto.com/id/494037460/photo/orange-fruit-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=Podpyj2fviG76mCSsr3aR6O3t4o3LdkahTHSU0GBCmQ=', uom: '02', size: '02', unit: '$8.99', total: '$8.99'},
  {id: 4,name: 'Plum', img: 'https://t4.ftcdn.net/jpg/00/53/70/31/360_F_53703182_zAOjMpa0eqxWGOtwYymPWI6JPcEBpRQf.jpg', uom: '02', size: '02', unit: '$8.99', total: '$8.99'},
  {id: 5,name: 'Pomegranate', img: 'https://static.vecteezy.com/system/resources/previews/004/753/409/large_2x/pomegranate-isolated-on-white-background-photo.jpg', uom: '02', size: '02', unit: '$8.99', total: '$8.99'},
  {id: 6,name: 'Grapes', img: 'https://media.istockphoto.com/id/610539412/photo/fresh-green-grapes-with-leaves-isolated-on-white.jpg?s=170667a&w=0&k=20&c=TdrGyQsgdpvop_Aq3V6uqLxHapjWn_FPAPGY5hPDpsE=', uom: '02', size: '02', unit: '$8.99', total: '$8.99'}
]

function App (){
  return(
    <div className="container">
      <Header />
      {
        data.map((item, index)=>{
          return <Fruit data={item}/>
        })
      }
    </div>
  )
}

export default App
