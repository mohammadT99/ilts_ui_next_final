import styles from '@/styles/courses_result.module.scss'
import Image from "next/image";
import ImageProduct from '@/public/Images/interview.png';
export default function CourseResults () {
    return (
        <>
            <div className={styles.course_result}>
                <div className="container-box">
                    <div className={styles.course_result_content}>
                        <Image src={ImageProduct} alt={''}  className={styles.course_result_image}/>
                        <div className={styles.course_result_text}>

                            <h1 className={styles.course_result_title}>نتایج دوره‌های متخصص</h1>
                            <h2>در ۱۷ سال اخیر بیش از ۳۵ هزار نفر در سون لرن به
                                صورت تخصصی آموزش برنامه نویسی دیده اند و هزاران نفر از این عزیزان در شرکت‌های مختلف
                                استخدام شده
                                اند.

                            </h2>
                            <p>مهمترین عامل موفقیت دانشپذیرانی که موفق به استخدام و کسب
                                درآمد پس از دوره‌های سون لرن بوده اند، نظم و استمرار در پیگیری محتوای دوره و انجام تمرین‌ها و
                                چالش پذیری آن‌ها بوده است.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}