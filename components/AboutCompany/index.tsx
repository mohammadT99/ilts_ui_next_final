import styles from '@/styles/about_company.module.scss'
import Image from "next/image";
import ImageVideo from '@/public/Images/video.png'
import CircleImage from '@/public/Images/circle.png'
import Gilre from '@/public/Images/image-gerl.png';
import {syncBuiltinESMExports} from "node:module";
import {VideoCircle} from "iconsax-react";

export default function AboutCompany() {
    return (
        <>
            <section className={styles.about_company}>
                <div className={`container-box`}>
                    <div className={styles.company__header}>
                        <h1><span className={`text-blue-600`}>در باره</span> شرکت</h1>
                        <p>
                            Lorem Epsom یک متن ساختگی است که با نامفهوم تولید شده است
                            سادگی از صنعت چاپ و مورد استفاده در طراحی گرافیکی
                            چاپگرها و متون، بلکه روزنامه و مجله
                        </p>
                    </div>
                    <div className={styles.company__video}>
                        <Image src={ImageVideo} alt={''}/>
                        <span className={styles.video_icon}>
                            <VideoCircle size='80' color={'#fff'}/>
                        </span>
                    </div>
                </div>
                <div className={styles.company__about__list}>
                    <div className={styles.about__company__circle}>
                        <Image src={CircleImage} alt={''} className={styles.company__about__list__circle}/>
                        <Image
                            className={styles.image}
                            src={Gilre}
                            width="400"
                            alt=""
                        />
                    </div>
                    <div className={styles.company__about__list__text}>
                        <h1>ثبت نام بدون دردسر</h1>
                        <p>
                            متن LoremEpsomisamock با سادگی نامفهومی تولید شده است
                            از صنعت چاپ و توسط graphic ai استفاده می شود
                        </p>
                        <div className={styles.cards__company}>
                            <div className={styles.company__card}>
                                <h2 className={styles.tx_number}>۰1</h2>
                                <span>
                                    <svg
                                        width="1"
                                        height="59"
                                        viewBox="0 0 1 59"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                    <line
                        x1="0.497559"
                        y1="0.908691"
                        x2="0.497556"
                        y2="58.0913"
                        stroke="black"
                        stroke-opacity="0.2"
                    />
                  </svg>
                </span>
                                <p className={styles.tx}>یک برنامه را انتخاب کنید</p>
                            </div>
                            <div className={styles.company__card}>
                                <h2 className={styles.tx_number}>۰1</h2>
                                <span>
                                    <svg
                                        width="1"
                                        height="59"
                                        viewBox="0 0 1 59"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                    <line
                        x1="0.497559"
                        y1="0.908691"
                        x2="0.497556"
                        y2="58.0913"
                        stroke="black"
                        stroke-opacity="0.2"
                    />
                  </svg>
                </span>
                                <p className={styles.tx}>یک برنامه را انتخاب کنید</p>
                            </div>
                            <div className={styles.company__card}>
                                <h2 className={styles.tx_number}>۰1</h2>
                                <span>
                                    <svg
                                        width="1"
                                        height="59"
                                        viewBox="0 0 1 59"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                    <line
                        x1="0.497559"
                        y1="0.908691"
                        x2="0.497556"
                        y2="58.0913"
                        stroke="black"
                        stroke-opacity="0.2"
                    />
                  </svg>
                </span>
                                <p className={styles.tx}>یک برنامه را انتخاب کنید</p>
                            </div>
                            <div className={styles.company__card}>
                                <h2 className={styles.tx_number}>۰1</h2>
                                <span>
                                    <svg
                                        width="1"
                                        height="59"
                                        viewBox="0 0 1 59"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                    <line
                        x1="0.497559"
                        y1="0.908691"
                        x2="0.497556"
                        y2="58.0913"
                        stroke="black"
                        stroke-opacity="0.2"
                    />
                  </svg>
                </span>
                                <p className={styles.tx}>یک برنامه را انتخاب کنید</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}