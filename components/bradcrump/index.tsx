
import styles from '@/styles/breadcrumb.module.scss';
import { ArrowLeft2, Home, Home2 } from 'iconsax-react';
export default function Breadcrumb({ links_before = 'ارشیو', links = 'محصولات' }) {

    return (
        <>
            <section className={styles.bradcump}>
                <div className={styles.container}>
                    <div className={styles.brsdcump__content}>
                        <div className={styles.brsdcump__item}>
                            <a href="" className={styles.item_link}><Home2 /> </a>
                            <span>
                                <ArrowLeft2 color='#fff' />
                            </span>
                            {links_before?(<a href="" className={styles.item_link}>{links_before}</a>):null}
                            
                           {links_before?( <span>
                            <ArrowLeft2 color="#fff" />
                           </span>):null}
                            <a href="" className={`${styles.item_link} ${styles.active}`}>{links}</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}