 import React from "react";
import DefaultLayout from '@/layouts/default'
 import CardBlog from "@/components/CardBlog";
import styles from '@/styles/blog.module.scss'
 import SidebarBlog from "@/components";
 import Breadcrumb from "@/components/bradcrump";
export default  function Blog () {
    return(
    <DefaultLayout>
       <div className="container-box">
           <Breadcrumb links={'وبلاگ'} links_before={''} />
           <div className={` ${styles.blog_content}`}>

               <div className={styles.card_blog_list}>
                   <CardBlog/>
                   <CardBlog/>
                   <CardBlog/>
                   <CardBlog/>
               </div>
               <SidebarBlog/>
           </div>
       </div>

    </DefaultLayout>
    )
}