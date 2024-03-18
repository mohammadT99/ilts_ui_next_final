import styles from '@/styles/dashboard/sidebar_org.module.scss' ;
import Avatar from "@/components/Avatar";
import User from '@/public/Images/user_1.png';
import {Danger, Facebook, FolderMinus, Home, SidebarLeft, UserAdd} from "iconsax-react";
import {Link} from "@nextui-org/link";
import {toast} from "react-toastify";
import isActive = toast.isActive;
/*
| srat comportnts siudebar
 */
export default function SidebarDashboard ( ) {
    const menueList = [
        {
            title: 'خانه',
            icon: <Home/> ,
            href:'/dashboard',
            active:true
        } ,
        {
            title: 'دوره های خریداری شده',
            icon:<FolderMinus/> ,
            href:'/dashboard/course' ,

        } ,
        {
            title: 'محصولات',
            icon: <Home/> ,
            href:'/'
        } ,
        {
            title: 'پشتیبانی',
            icon: <Danger/> ,
            href:'/dashboard/ticket'
        } ,

    ]
    const handdleClose = () => {
        const sidebar = document.getElementById('sidebar_dashboard') ;
        sidebar?.classList.toggle(`${styles.close}`)
    }
    return (
        <>
           <div className={styles.sidebar_dashboard} id={'sidebar_dashboard'}>
               <div className={styles.sidebar_dashboard_header}>
                    <div className={styles.sidebar_dashboard_header_user} >
                        <Avatar image={User} title={'سارا رجبی'} size={'80'} description={''} fontS={'18'}  />
                        <Link href={'/dashboard/profile'} className={` bg-secondary text-black  ${styles.sidebar_dashboard_header_user_links}`}>پروفایل</Link>
                    </div>
                    <span onClick={handdleClose}><SidebarLeft/></span>
               </div>
               <div className={styles.sidebar_dashboard_content}>
                   {
                       menueList.map((item ,key ) => {
                           return (
                               <>
                                   <li className={styles.sidebar_dashboard_content_list}>

                                       <Link href={item.href} className={`${item.active?styles.active:null} ${styles.sidebar_dashboard_content_list_link}`}>
                                           <div className="px-2 flex gap-2 ">
                                               {item.icon}
                                               <p>{item.title}</p>
                                           </div>
                                       </Link>
                                   </li>
                               </>
                           )
                       })
                   }
               </div>
           </div>
        </>
    )
}

