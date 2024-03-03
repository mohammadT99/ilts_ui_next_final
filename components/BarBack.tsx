import Image from "next/image";
import BarBackImage from '../public/BreadBar.png'

export default function BarBack(props) {
   return <Image src={BarBackImage} alt={''} className={props.class}/>
}