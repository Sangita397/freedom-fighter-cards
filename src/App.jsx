import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/usercard'
import laxmi from './assets/laxmi.jpg'
import Maharana from './assets/Maharana.jpg'
import prithviraj from './assets/prithviraj.jpg'



function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='container'>
 
  <UserCard name="Lakshmi Bai" desc="Rani Lakshmi Bai was a brave queen who fought battle with English to save her country. She martyred in battle field and is a great symbol of strength of females of India. A square is named in her honor at cantonment, Bareilly." image={laxmi}/>

  <UserCard name="Maharana Pratap" desc="Pratap Singh, popularly known as the Maharana Pratap, was the 13th Maharana of Mewar known for his valiant and spirited defence against the Mughal Empire. He was one of the bravest Rajput rulers of India, who ruled Mewar in Rajasthan for 35 years." image={Maharana}/>
  <UserCard name="PrithviRaj Chauhan" desc="Prithvirāja III, popularly known as Prithviraj Chauhan, was an Indian king from the Chahamana (Chauhan) dynasty. From the very early years, Prithvi Raj showed his sharpness and brilliance by learning all military skills." image={prithviraj}/>

 
    
   </div>
  )
}

export default App
