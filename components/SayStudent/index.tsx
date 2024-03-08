import styles from '@/styles/say_student.module.scss';
import Image from "next/image";
import Bgimage from '@/public/Images/user-24.png';

export default function SayStudentSection () {
    return (
        <>
            <section className={styles.student__say}>
                <div className={`container-box`}>
                    <div className={styles.student__say__header}>
                        <h1><span className={`text-blue-600`}>چی</span> دانش آموزان ما می گویند؟</h1>
                        <p>Lorem Epsom یک متن ساختگی است که با سادگی نامفهومی از چاپ تولید شده است
                            صنعت و توسط طراحی گرافیکی چاپگرها و متون و همچنین روزنامه و مجله استفاده می شود </p>
                    </div>
                    <div className={styles.student__say__content}>
                        <p>Lorem Epsom یک متن ساختگی است که با سادگی نامفهومی از چاپ تولید شده است
                            صنعت و توسط طراحان گرافیک استفاده می شود. چاپگرها و متون، بلکه روزنامه و مجله
                            در ستون و ردیف در صورت لزوم و برای شرایط فعلی تکنولوژی مورد نیاز و
                            برنامه های کاربردی متنوع با هدف کتاب های متعدد در الف</p>
                    </div>
                    <div className={styles.user__box}>
                        <Image src={Bgimage} alt={''}/>
                        <p className={`text-xl font-bold`}>مجید امینی</p>
                        <span>المان</span>
                    </div>
                </div>
            </section>
        </>
    )
}