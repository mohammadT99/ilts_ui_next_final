import styles from '@/styles/avatar.module.scss'
import Image from "next/image";


export default function Avatar ({image , title , description }) :any {
    return (
        <>
            <div className={styles.avatar}  >
                <Image src={image} alt={''} className={styles.avatar_image} />
                <div className={styles.avatar_title}>
                    <p>{title}</p>
                </div>
                <div className={styles.avatar_desc}>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}