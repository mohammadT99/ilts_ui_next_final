 import React, {useEffect, useState} from "react";
import DefaultLayout from '@/layouts/default'
 import CardBlog from "@/components/CardBlog";
import styles from '@/styles/blog.module.scss'
 import SidebarBlog from "@/components";
 import Breadcrumb from "@/components/bradcrump";
 import CardLoarder from "@/components/CardLoader";
 import SidebarNewCourse from "@/components/Sidebar/SidebarNewCourse";
 interface Article {
     id:number,
     title:string ,
     description:string

 }
export default  function Blog () {
    const[article , setArticle ] = useState([]);
    const [loading , setLoading ] = useState(true)

    const ArticleShow = () => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then((res) => res.json())
            .then((data) => {
                setArticle(data);
                setLoading(false)
            })
    }
    useEffect(() => {
        ArticleShow();
    }, []);

    return(
    <DefaultLayout>
       <div className="container-box">
           <Breadcrumb links={'وبلاگ'} links_before={''} />
           <div className={` ${styles.blog_content}`}>

               <div className={styles.card_blog_list}>
                   {
                       loading === true ? (
                           <>
                               <CardLoarder/>
                               <CardLoarder/>
                               <CardLoarder/>
                           </>
                       ): (

                               article.map((item , key ) => {
                                   return(
                                       <CardBlog data={item} />
                                   )
                               })

                       )
                   }

               </div>
               <div className={styles.sidebar}>
                   <SidebarBlog/>
                   <SidebarNewCourse/>
               </div>
           </div>
       </div>

    </DefaultLayout>
    )
}