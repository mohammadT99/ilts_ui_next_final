 import styles from '@/styles/header.module.scss';
 import Image from "next/image";
import Logo from '@/public/Images/logo.png' ;
 import {startOfYear} from "@internationalized/date";
const  Header = ( )=> {

    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Image src={Logo} alt=""/>
                    <span className=''>Education</span>
                </div>
                <nav>
                    <ul className={styles.navbar}>
                        <li className={styles.nav_item}><a href="#" className={styles.nav_link}>home</a></li>
                        <li className={styles.nav_item}><a href="#" className={styles.nav_link}>home</a></li>
                        <li className={styles.nav_item}><a href="#" className={styles.nav_link}>home</a></li>
                        <li className={styles.nav_item}><a href="#" className={styles.nav_link}>home</a></li>
                        <li className={styles.nav_item}><a href="#" className={styles.nav_link}>home</a></li>
                        <li className={styles.nav_item}><a href="#" className={styles.nav_link}>home</a></li>
                    </ul>
                </nav>

                <div className={styles.responsive__menue}>
              <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                >
                  <path
                      d="M3.53809 7H21.5381M9.03809 12H21.5381M3.53809 17H21.5381"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                  />
                </svg>
              </span>
                </div>
                <div className={styles.login}>
                    <span className={` text-gray-500`}>IOG IN</span>
                    <button className={styles.btn_primary}>Sing Up</button>
                </div>
            </div>
        </>
    )
}

 export default Header;