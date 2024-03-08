
import styles from '@/styles/footer.module.scss';
import {Call, Chrome, Copyright, DeviceMessage, ImportSquare, Location} from "iconsax-react";
import Image from "next/image";
import Towitericon from '@/public/Images/x.png';
import Yotubeicon from '@/public/Images/youtube.png';
import Telegramicon from '@/public/Images/telegram.png'
import Instagramicon from '@/public/Images/instagram.png';
import Linkedinicon from '@/public/Images/linkedin.png';
export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer__content}>
                    <div className={styles.footer__content__logo}>
                        <h1>Education</h1>
                        <p>Lorem Epsom یک متن ساختگی است که با سادگی نامفهومی از چاپ تولید شده است
                            صنعت
                            و
                            مورد استفاده طراحان گرافیک چاپگرها و متون، بلکه روزنامه و مجله در ستون و
                            ردیف
                            مانند
                            لازم الف </p>
                        <div className={styles.icons}>
                            <Image src={Towitericon} alt={''} />
                            <Image src={Yotubeicon} alt={''}/>
                            <Image src={Telegramicon} alt={''}/>
                            <Image src={Instagramicon} alt={''}/>
                            <Image src={Linkedinicon} alt={''}/>



                        </div>
                    </div>
                    <div className={styles.footer__content__link}>
                        <a href="#" className={styles.link_header}>درباره</a>
                        <a href="#" className={styles.link_footer}>
                            خانه
                        </a>

                        <a href="#" className={styles.link_footer}>
                            ویژگی ها
                        </a>

                        <a href="#" className={styles.link_footer}>
                            مقالات
                        </a>

                        <a href="#" className={styles.link_footer}>
                            پشتیبانی
                        </a>
                    </div>
                    <div className={styles.footer__content__link}>
                        <a href="#" className={styles.link_header}>شرکت</a>
                        <a href="#" className={styles.link_footer}>
                            چگونه کار می کنیم
                        </a>

                        <a href="#" className={styles.link_footer}>
                            سوالات متداول
                        </a>

                        <a href="#" className={styles.link_footer}>
                            قیمت گذاری
                        </a>

                        <a href="#" className={styles.link_footer}>
                            شرایط استفاده از خدمات
                        </a>
                    </div>
                    <div className={styles.footer__content__link}>
                        <a href="#" className={styles.link_header}>با ما تماس بگیرید</a>
                        <a href="#" className={styles.link_footer}>
                            <span><Location/></span>
                            ایران تهران منطقه ۱۱شهر ری ابن باویه 12
                            ایران تهران منطقه ۱۱شهر ری ابن باویه 12
                        </a>

                        <a href="#" className={styles.link_footer}>
                            <span><Call/></span>
                            ۰۲۱۵۴۴۴۴۴۴۴
                        </a>

                        <a href="#" className={styles.link_footer}>
                            <span><DeviceMessage/></span>
                            education@mail.com
                        </a>

                        <a href="#" className={styles.link_footer}>
                            <span><Chrome/></span>
                            www.education.com
                        </a>
                    </div>


                </div>
                <div className={styles.footer__end}>
                    <p>کیله حقوق  کپی رایت متعلق به این سایت میباشد 2023</p>
                    <span><Copyright/></span>
                </div>
            </footer>
        </>
    )
}