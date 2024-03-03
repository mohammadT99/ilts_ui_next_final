import styles from '@/styles/package.module.scss';
import ImageTest from '@/public/Images/imageProduct.png';
import Image from "next/image";
import Header from "@/components/Global/Header/Header";
import { Navbar } from "@/components/navbar";
import { useEffect, useState } from 'react';
import Breadcrumb from '@/components/bradcrump';


const Index = () => {



    return (
        <>
            <Navbar />
            <Breadcrumb/>
            <section className={styles.contentProduct}>
                <div className={styles.video_card}>
                    <div className={styles.video_box}>
                        <Image src={ImageTest} alt={'test'} />
                    </div>
                    <div className={styles.description_box}>
                        <div className={styles.description_box_header}>
                            <h1 className={styles.description_box_header_h1}>Specialized course to get familiar with the
                                IELTS
                                exam
                                (special for academic and general exam candidates)</h1>
                            <div className={styles.icon_video}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M3 9C3 6.17157 3 4.75736 3.87868 3.87868C4.75736 3 6.17157 3 9 3H15.3431C16.1606 3 16.5694 3 16.9369 3.15224C17.3045 3.30448 17.5935 3.59351 18.1716 4.17157L19.8284 5.82843C20.4065 6.40649 20.6955 6.69552 20.8478 7.06306C21 7.4306 21 7.83935 21 8.65685V15C21 17.8284 21 19.2426 20.1213 20.1213C19.48 20.7626 18.5534 20.9359 17 20.9827V18L17 17.9384C17.0001 17.2843 17.0001 16.6965 16.9362 16.2208C16.8663 15.7015 16.7042 15.1687 16.2678 14.7322C15.8313 14.2958 15.2985 14.1337 14.7792 14.0638C14.3034 13.9999 13.7157 13.9999 13.0616 14L13 14H10L9.93839 14C9.28427 13.9999 8.69655 13.9999 8.22084 14.0638C7.70149 14.1337 7.16867 14.2958 6.73223 14.7322C6.29579 15.1687 6.13366 15.7015 6.06383 16.2208C5.99988 16.6965 5.99993 17.2843 6 17.9384L6 18V20.9239C5.02491 20.828 4.36857 20.6112 3.87868 20.1213C3 19.2426 3 17.8284 3 15V9ZM15 18V21H9C8.64496 21 8.31221 21 8 20.9983V18C8 17.2646 8.00212 16.8137 8.046 16.4873C8.08457 16.2005 8.13942 16.1526 8.14592 16.1469L8.14645 16.1464L8.14692 16.1459C8.1526 16.1394 8.20049 16.0846 8.48734 16.046C8.81369 16.0021 9.26462 16 10 16H13C13.7354 16 14.1863 16.0021 14.5127 16.046C14.7995 16.0846 14.8474 16.1394 14.8531 16.1459L14.8536 16.1464L14.8541 16.1469C14.8606 16.1526 14.9154 16.2005 14.954 16.4873C14.9979 16.8137 15 17.2646 15 18ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9H12C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7H7Z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className={styles.description_box_description}>
                            <p>IELTS self-study planning and study course (special for academic and general test
                                candidates)
                                Undoubtedly, to succeed in the IELTS test, you must plan for the IELTS...</p>
                        </div>
                        <div className={styles.description_box_buttons}>
                            <div className={styles.price_box}>
                                <span className={styles.price_box_span}>price:</span>
                                <p className={styles.disabel_text}>50$</p>
                                <p className={styles.price_org}>
                                    <span>12$</span>
                                </p>
                            </div>
                            <button className={styles.price_button}>
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.descreption_box}>

                    <div className={styles.content_video}>
                        <h1 className={styles.content_video_header}>
                            IELTS self-study planning and study course (special for academic and general exam
                            candidates)
                        </h1>
                        <p className={styles.content_video_desc}>
                            Undoubtedly, in order to succeed in the IELTS test, we must prioritize IELTS planning in all
                            our
                            efforts. The characteristic of an ideal planning is the ability to calculate time and also
                            the
                            ability to measure the progress of that program over time.

                            Many candidates for the IELTS test, especially people who want to prepare for this test by
                            self-teaching or self-study, come across common questions, such as:

                            For each IELTS test skill, which source should I read among all these sources?

                            What is the correct way to practice speaking?

                            What should I do to improve reading?

                            What resources are recommended to improve listening at my level?

                            Also, many candidates have problems to properly plan their studies

                            In this course, all the questions and concerns of your way to study IELTS will be answered
                            so that
                            you can reach your goal with more seriousness and perseverance.

                            Course instructor: Dr. Mehdi Modares (IELTS Mock Examiner)

                            Number of sessions: three training sessions

                            Support: Yes

                            Time validity of the course: one year

                            Minimum level required for course registration: 4 IELTS

                            Telegram support: Membership in the Telegram group to receive useful links, as well as
                            interaction
                            with the participants and questions and answers with the course professor
                        </p>
                    </div>
                    <div className={styles.siebars}>
                        <div className={styles.sidebar_single_product}>
                            <div className={styles.sidebar_item}>
                                <div className={styles.item_icon}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <rect x="4" y="3" width="16" height="18" rx="2" fill="#7E869E"
                                                fill-opacity="0.25" />
                                            <path
                                                d="M4 19C4 17.8954 4.89543 17 6 17H17C17.9319 17 18.3978 17 18.7654 16.8478C19.2554 16.6448 19.6448 16.2554 19.8478 15.7654C20 15.3978 20 14.9319 20 14V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6C4.89543 21 4 20.1046 4 19Z"
                                                fill="black" />
                                            <path
                                                d="M9.5 10.5L11.3939 12.3939C11.4525 12.4525 11.5475 12.4525 11.6061 12.3939L15.5 8.5"
                                                stroke="black"
                                                stroke-width="1.2" />
                                        </svg>
                                    </span>
                                </div>
                                <div className={styles.item_header}>
                                    <span className={styles.top_header}>Main category</span>
                                    <h1>language teaching</h1>
                                </div>
                            </div>
                            <div className={styles.sidebar_item}>
                                <div className={styles.item_icon}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <rect x="4" y="3" width="16" height="18" rx="2" fill="#7E869E"
                                                fill-opacity="0.25" />
                                            <path
                                                d="M4 19C4 17.8954 4.89543 17 6 17H17C17.9319 17 18.3978 17 18.7654 16.8478C19.2554 16.6448 19.6448 16.2554 19.8478 15.7654C20 15.3978 20 14.9319 20 14V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6C4.89543 21 4 20.1046 4 19Z"
                                                fill="black" />
                                            <path
                                                d="M9.5 10.5L11.3939 12.3939C11.4525 12.4525 11.5475 12.4525 11.6061 12.3939L15.5 8.5"
                                                stroke="black"
                                                stroke-width="1.2" />
                                        </svg>
                                    </span>
                                </div>
                                <div className={styles.item_header}>
                                    <span className={styles.top_header}>Guarantee the quality of the course</span>
                                    <h1>Various factors will affect the test score. But we guarantee you about the
                                        quality of education and how to hold classes and the exact educational program
                                        to reach your desired score.</h1>
                                </div>
                            </div>
                            <div className={styles.sidebar_item}>
                                <div className={styles.item_icon}>
                                    <span>

                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect x="5" y="3" width="14" height="18" rx="2" fill="#7E869E" fill-opacity="0.25" />
                                            <path d="M9.5 7.5L14.5 7.5" stroke="black" stroke-linecap="round" />
                                            <path d="M9.5 10.5L12.5 10.5" stroke="black" stroke-linecap="round" />
                                            <path d="M9.5 13.5L13.5 13.5" stroke="black" stroke-linecap="round" />
                                            <path d="M9.5 16.5L12.5 16.5" stroke="black" stroke-linecap="round" />
                                            <rect x="7" y="7" width="1" height="1" rx="0.5" fill="black" />
                                            <rect x="7" y="10" width="1" height="1" rx="0.5" fill="black" />
                                            <rect x="7" y="13" width="1" height="1" rx="0.5" fill="black" />
                                            <rect x="7" y="16" width="1" height="1" rx="0.5" fill="black" />
                                        </svg>

                                    </span>
                                </div>
                                <div className={styles.item_header}>
                                    <span className={styles.top_header}>Course price</span>
                                    <div className={styles.price_box}>
                                        <span className={styles.price_box_span}>price:</span>
                                        <p className={styles.disabel_text}>50$</p>
                                        <p className={styles.price_org}>
                                            <span>12$</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.sidebar_item}>
                                <div className={styles.item_icon}>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect x="5" y="3" width="14" height="18" rx="2" fill="#7E869E" fill-opacity="0.25" />
                                            <path d="M9.5 7.5L14.5 7.5" stroke="black" stroke-linecap="round" />
                                            <path d="M9.5 10.5L12.5 10.5" stroke="black" stroke-linecap="round" />
                                            <path d="M9.5 13.5L13.5 13.5" stroke="black" stroke-linecap="round" />
                                            <path d="M9.5 16.5L12.5 16.5" stroke="black" stroke-linecap="round" />
                                            <rect x="7" y="7" width="1" height="1" rx="0.5" fill="black" />
                                            <rect x="7" y="10" width="1" height="1" rx="0.5" fill="black" />
                                            <rect x="7" y="13" width="1" height="1" rx="0.5" fill="black" />
                                            <rect x="7" y="16" width="1" height="1" rx="0.5" fill="black" />
                                        </svg>
                                    </span>
                                </div>
                                <div className={styles.item_header}>
                                    <span className={styles.top_header}>Course price</span>
                                    <div className={styles.price_box}>
                                        <span className={styles.price_box_span}>price:</span>
                                        <p className={styles.disabel_text}>50$</p>
                                        <p className={styles.price_org}>
                                            <span>12$</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.sidebar_item}>
                                <button className={styles.sidebar_single_product_button}>
                                    <span className={styles.icon_button}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2 11.46V16.46C2 18.75 3.85 20.6 6.14 20.6H17.85C20.14 20.6 22 18.74 22 16.45V11.46C22 10.79 21.46 10.25 20.79 10.25H3.21C2.54 10.25 2 10.79 2 11.46ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"
                                                fill="#fff" />
                                            <path
                                                d="M13.5 4.6099V7.5399C13.5 8.2099 12.96 8.7499 12.29 8.7499H3.21C2.53 8.7499 2 8.1899 2 7.5199C2.01 6.3899 2.46 5.3599 3.21 4.6099C3.96 3.8599 5 3.3999 6.14 3.3999H12.29C12.96 3.3999 13.5 3.9399 13.5 4.6099Z"
                                                fill="#fff" />
                                            <path
                                                d="M19.97 2H17.03C15.76 2 15 2.76 15 4.03V6.97C15 8.24 15.76 9 17.03 9H19.97C21.24 9 22 8.24 22 6.97V4.03C22 2.76 21.24 2 19.97 2ZM20.91 5.93C20.81 6.03 20.66 6.1 20.5 6.11H19.09L19.1 7.5C19.09 7.67 19.03 7.81 18.91 7.93C18.81 8.03 18.66 8.1 18.5 8.1C18.17 8.1 17.9 7.83 17.9 7.5V6.1L16.5 6.11C16.17 6.11 15.9 5.83 15.9 5.5C15.9 5.17 16.17 4.9 16.5 4.9L17.9 4.91V3.51C17.9 3.18 18.17 2.9 18.5 2.9C18.83 2.9 19.1 3.18 19.1 3.51L19.09 4.9H20.5C20.83 4.9 21.1 5.17 21.1 5.5C21.09 5.67 21.02 5.81 20.91 5.93Z"
                                                fill="#fff" />
                                        </svg>

                                    </span>
                                    add to Card
                                </button>
                            </div>
                        </div>
                        <div className={styles.sidebar_single_product}>
                            <div className={styles.sidebar_item}>
                                <div className={styles.item_header}>
                                    <span className={styles.top_header}>share To : </span>
                                    <div className={styles.share_to}>
                                        <img className={styles.icon_facebock} src="./assets/images/facebook@2x.png"
                                            alt="" />
                                        <img className={styles.icon_facebock} src="./assets/images/facebook@2x.png"
                                            alt="" />
                                        <img className={styles.icon_facebock} src="./assets/images/facebook@2x.png"
                                            alt="" />
                                        <img className={styles.icon_facebock} src="./assets/images/facebook@2x.png"
                                            alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index;