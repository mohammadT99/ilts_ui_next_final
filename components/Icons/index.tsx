import styles from '@/styles/icons.module.scss'
import Image from "next/image";
import Twiter from '@/public/Images/x.png';
import Telegram from '@/public/Images/telegram.png'
import Youtube from '@/public/Images/youtube.png';
import linkdin from '@/public/Images/linkedin.png'


export default function Icons(): any {
    return (
        <>
            <div className={styles.icons}>
                <Image src={Twiter} alt={''} className={styles.icon_image}/>
                <Image src={Telegram} alt={''} className={styles.icon_image}/>
                <Image src={Youtube} alt={''} className={styles.icon_image}/>
                <Image src={linkdin} alt={''} className={styles.icon_image}/>

            </div>

        </>
    )
}