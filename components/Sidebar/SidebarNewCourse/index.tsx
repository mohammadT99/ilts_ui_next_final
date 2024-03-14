import styles from '@/styles/sidebar_new_course.module.scss';
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

export default function SidebarNewCourse () {
    return (
        <>
            <div className={styles.sidebar_blog}>
                <div className={styles.sidebar_blog_title}>
                    پیشنهاد ویژه
                </div>
                <div className={styles.sidebar_blog_video}>
                    <VideoPlayer/>
                    <div className={styles.sidebar_blog_video_title}>
                        <h1>دوره بروز شده اموزش زبان</h1>
                        <span className={styles.sidebar_blog_video_title_spc}>
                            تخفیف ویژه
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}