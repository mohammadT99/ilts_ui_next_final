import SvgHeader from "@/components/SvgHeader";

import ImageEndBanner from '@/public/Images/bg_banner.svg'
import styles from '@/styles/banner.module.scss'
import Icon1 from '@/public/Images/icon1.svg'
import Image from "next/image";
import {Button} from "@nextui-org/react";
import ImagebgBanner from '@/public/Images/image-banner.png';

export default function Banner() {
    return (
        <>
            <div className="container-box">
                <SvgHeader/>
                <section className={styles.banner}>
                    <div className={``}>
                        <div className={`z-1 ${styles.banner__content}`}>
                            <div className={styles.banner__content__left}>
                                <div className={styles.banner__content__left__header}>
                                    <p className={styles.text_header}>
                                        انلاین <span className={`text-blue-600`}>یادگیری که می توانید به آن دسترسی داشته باشید</span>هر
                                        جا به راحتی!
                                    </p>
                                    <span className={`text-gray-500`}
                                    >   Lorem Epsom یک متن ساختگی است که با نامفهوم تولید شده است
                   سادگی از صنعت چاپ و استفاده شده توسط گرافیک
                   طراحان چاپگرها و متون، بلکه روزنامه و مجله
                   در ستون و سطر در صورت لزوم و برای a</span
                                    >
                                </div>
                                <div className={styles.banner__content__left__button}>
                                    <Button className={`bg-warning-500 font-normalt`}>دوره ها</Button>
                                    <div className={styles.video}>
                  <span className={styles.icon}>
                      <Image src={Icon1} alt={''}/>
                  </span>
                                        <p>ببینید چگونه کار می کند؟</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.banner__content__right}>
              <span>
                <svg
                    width="533"
                    height="674"
                    viewBox="0 0 533 674"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M183.072 55.9242C220.386 -17.3619 312.334 -17.3618 349.647 55.9242L351.002 58.5858C368.218 92.3949 399.597 113.273 433.613 113.548L436.294 113.569C510.028 114.164 556.002 205.923 519.58 279.804L518.257 282.487C501.455 316.571 501.455 358.328 518.257 392.411L519.58 395.093C556.002 468.976 510.028 560.733 436.294 561.329L433.613 561.349C399.597 561.625 368.218 582.504 351.002 616.311L349.647 618.973C312.334 692.26 220.386 692.26 183.072 618.973L181.717 616.311C164.502 582.504 133.121 561.625 99.1049 561.349L96.4269 561.329C22.6925 560.733 -23.281 468.976 13.1389 395.093L14.4617 392.411C31.2634 358.328 31.2634 316.571 14.4617 282.487L13.1389 279.804C-23.281 205.923 22.6925 114.164 96.4269 113.569L99.1049 113.548C133.121 113.273 164.502 92.3949 181.717 58.5858L183.072 55.9242Z"
                      fill="#E7B741"
                  />
                  <path
                      d="M193.454 91.0176C226.117 26.8669 306.603 26.867 339.265 91.0176L340.451 93.3474C355.521 122.942 382.989 141.218 412.764 141.458L415.111 141.477C479.654 141.998 519.896 222.319 488.015 286.99L486.857 289.339C472.149 319.174 472.149 355.726 486.857 385.56L488.015 387.908C519.896 452.581 479.654 532.9 415.111 533.422L412.764 533.439C382.989 533.681 355.521 551.957 340.451 581.55L339.265 583.88C306.603 648.032 226.117 648.032 193.454 583.88L192.268 581.55C177.199 551.957 149.73 533.681 119.954 533.439L117.61 533.422C53.0668 532.9 12.8242 452.581 44.7041 387.908L45.862 385.56C60.5694 355.726 60.5694 319.174 45.862 289.339L44.7041 286.99C12.8242 222.319 53.0668 141.998 117.61 141.477L119.954 141.458C149.73 141.218 177.199 122.942 192.268 93.3474L193.454 91.0176Z"
                      fill="#FFD776"
                  />
                </svg>
              </span>
                                <div className={styles.banner__content__right__img}>
                                    <Image src={ImagebgBanner} alt={''} className={styles.img}/>
                                    <div className={styles.circle}>
                  <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="124"
                        height="124"
                        viewBox="0 0 124 124"
                        fill="none"
                    >
                      <circle cx="62" cy="62" r="62" fill="#F9CA54"/>
                    </svg>
                  </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.banner__content__end}>
                            <Image src={ImageEndBanner} className={styles.banner__content__end__image} alt={''}>
                            </Image>
                        </div>


                        <div className={styles.content}>
                            <div className={styles.txt}>
                                <p>۱۵۰+</p>
                                <span>مجموع دوره ها</span>
                            </div>
                            <div className={styles.txt}>
                                <p>۱۵۰+</p>
                                <span>مجموع دوره ها</span>
                            </div>
                            <div className={styles.txt}>
                                <p>۱۵۰+</p>
                                <span>مجموع دوره ها</span>
                            </div>
                            <div className={styles.txt}>
                                <p>۱۵۰+</p>
                                <span>مجموع دوره ها</span>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}