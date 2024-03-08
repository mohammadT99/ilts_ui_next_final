import React from "react";
import Image from "next/image";
import ImageCardAbout from "@/public/Images/about_card.svg";
import styles from '@/styles/card_about_section.module.scss';

export default function CardAboutSection ():any {
    return (
        <>
        <div className={`columns-2 ${styles.about__card__item}`}>
            <div className={styles.about__crad__img}>
                <span>
                    <Image src={ImageCardAbout} alt={'image'}/>
                </span>
            </div>
            <div className={styles.about__header__text}>
                <h1> پلتفرم دیجیتال</h1>
                <p>
                    Lorem Ipsum به سادگی متن ساختگی چاپ و
                    صنعت حروفچینی لورم ایپسوم بوده است .....
                </p>
            </div>
        </div>
</>
)
}