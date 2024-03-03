
import styles from '@/styles/sidebar_blog.module.scss' ;

export default  function  SidebarBlog (){
    return(
        <>
            <div className={styles.sidebar_blog}>
                <div className={styles.sidebar_blog_title}>
                    فهرست مطالب
                </div>
                <div className={styles.sidebar_blog_item}>
                    <p>test</p>
                </div>
                <div className={styles.sidebar_blog_item}>
                    <p>test</p>
                </div>
                <div className={styles.sidebar_blog_item}>
                    <p>test</p>
                </div>
                <div className={styles.sidebar_blog_item}>
                    <p>test</p>
                </div>
            </div>

        </>
    )
}