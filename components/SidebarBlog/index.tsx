import styles from '@/styles/sidebar_blog.module.scss';
import {Link} from "@nextui-org/link";

export default function SidebarBlogSingle () {
    return(
        <>
            <div className={styles.sidebar_blog_single}>
                <div className={styles.sidebar_blog_single_title}>
                    <h1>راهنمای مقاله</h1>
                </div>
                <div className={styles.sidebar_blog_single_content}>
                    <ul className={styles.sidebar_blog_single_content_list}>
                        <li><Link href={'#'}>برنامه نویسی چیست؟</Link></li>
                        <li><Link href={'#'}>خلاصه ای از تاریخچه برنامه نویسی</Link></li>
                        <li><Link href={'#'}>مهارت هایی که یک برنامه نویس باید داشته باشد؟</Link></li>
                        <li><Link href={'#'}>معرفی انواع مشاغل برنامه نویسی</Link></li>
                        <li><Link href={'#'}>پرکاربردترین زبان‌های برنامه نویسی چیست؟؟</Link></li>
                        <li><Link href={'#'}>اولین قدم‌های یادگیری برنامه نویسی چیست؟</Link></li>

                    </ul>
                </div>
            </div>
        </>
    )
}