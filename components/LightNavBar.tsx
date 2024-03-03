import styles from '@/styles/header.module.scss'
import Image from "next/image";
import Logo from "@/public/Images/logo.png";
import React from "react";
import {Button} from "@nextui-org/react";

export default function LightNavBar() {
    return <header className={styles.light_header}>
        <div className={styles.light_nav}>

            <div className={styles.light_menu_logo}>
                <span className={styles.light_menu_logo_it}>
                      <Image src={Logo} alt={''}/>
                    <span className="font-bold text-inherit">ITLS</span>
                </span>

            </div>

            <div className={styles.light_nav_menu}>
                <ul>
                    <li>خانه</li>
                    <li>محصولات</li>
                    <li>تماس با ما</li>
                    <li>دررباره ما</li>
                </ul>
            </div>

            <div className={styles.login_btn}>


                <Button>
                    ورود
                </Button>
                <Button>
                    ثبت نام
                </Button>
            </div>


        </div>

    </header>


}