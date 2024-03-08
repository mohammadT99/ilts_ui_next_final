import styles from '@/styles/video_section.module.scss' ;
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import {Video} from "iconsax-react";

export default function  VideoSection () {
    return (
        <>
            <div className={styles.video_section}>
                <div className="container-box">
                    <div className={styles.video_section_title}>
                        <Video size={60} color={'#525FE1'}/>
                        <h1>ویدیو‌های نمونه تدریس دوره</h1>
                    </div>
                    <div className={styles.video_player}>
                        <div className={styles.video_section_box}></div>
                        <div className={styles.video}>
                            <VideoPlayer/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

