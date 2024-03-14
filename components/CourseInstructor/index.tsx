
import styles from '@/styles/course_instructor.module.scss' ;
import {UserSquare} from "iconsax-react";
import Image from "next/image";
import ImageMentor from '@/public/Images/image-gerl.png'
import Avatar from "@/components/Avatar";
import MentorsCard from "@/components/MentorsCard";

export default function  CourseInstructor () {
    return (
        <>
            <div className={styles.course_instructor}>
                <div className="container-box">
                    <div className={styles.course_instructor_header}>
                        <UserSquare size={60} color={'#525FE1'}/>
                        <h1 className={styles.course_instructor_header_h1}>مدرس و منتورهای دوره</h1>
                    </div>
                    <div className={styles.course_instructor_content}>
                        <div className={styles.course_instructor_content_mentors_org}>
                            <div className={styles.course_instructor_content_mentors_org_right}>
                               <Avatar image={ImageMentor} title={'سارا محبی'} description={'مدرس و منتور دوره'}/>
                            </div>
                                <div className={styles.course_instructor_content_mentors_org_left}>
                                    <p>مدیر تیم فنی در اسنپ فود برنامه‌نویس ارشد سون‌لرن فول استک دولوپر برنامه‌ی همکار فریلنسر: توسعه‌ی زیرساخت فروشگاهی، شرکتی، اتوماسیون و ...</p>
                                </div>
                        </div>
                        <div className={styles.course_instructor_content_mentors_2}>
                            <div className={styles.course_instructor_content_mentors_title}>
                                <h1>منتورهای دوره
                                </h1>
                                <p>دوستان زیر منتور متخصص React هستند و در طول دوره به سوالات شما پاسخ میدن و همراهتون هستند.</p>
                               <div className={`flex justify-center items-center gap-20 ${styles.course_instructor_content_mentors_2_cards}`}>
                                   <MentorsCard/>
                                   <MentorsCard/>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}