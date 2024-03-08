import Image from "next/image";
import ImageUser from '@/public/Images/user_1.png' ;
import styles from '@/styles/mentors_card.module.scss' ;

export default  function  MentorsCard({}) {
 return (
     <>
        <div className={` bg-primary-50 ${styles.mentors_card}`}>
            <Image src={ImageUser} alt={''} />
            <div className={styles.mentors_card_title}>
                <h1>سارا محبی</h1>
                <div className={styles.mentors_card_title_span}>
                    <span>منتور</span>
                </div>
            </div>
        </div>
     </>
 )
}