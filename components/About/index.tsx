import React from "react";
import styles from  '@/styles/about_section.module.scss';
import Image from "next/image";
import ImageCardAbout from '@/public/Images/about_card.svg';
import CardAboutSection from "@/components/CardAboutSection";
export default function  AboutSection () {
    return (
        <>
            <section className={` container-box ${styles.about}`}>
                <div className={styles.container}>
                    <div className={styles.about__header}>
                        <h1><span className="text-blue-500">چرا ما هستیم </span>بهترین از دیگران؟</h1>
                        <p>
                            Lorem Epsom یک متن ساختگی است که با نامفهوم تولید شده است
                            سادگی از صنعت چاپ و مورد استفاده در طراحی گرافیکی
                            چاپگرها و متون، بلکه روزنامه و مجله
                        </p>
                    </div>
                    <div className={styles.about__crads}>
                        <CardAboutSection/>
                        <CardAboutSection/>
                        <CardAboutSection/>
                        <CardAboutSection/>
                        <CardAboutSection/>
                        <CardAboutSection/>
                    </div>
                </div>
            </section>
        </>
    )
}