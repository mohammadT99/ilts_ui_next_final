import styles from '@/styles/comments.module.scss';
import {MessageAdd, Star1} from "iconsax-react";
import {Button} from "@nextui-org/react";
import CardComments from "@/components/CardComments";
import AddCommetns from "@/components/Comments/Components/AddCommetns";
export default function Comments () {
    return (
        <>
           <div className={styles.commets}>
               <div className={styles.commets_headers}>
                   <div className={styles.commets_headers_title}>
                       <span>
                           12
                       </span>
                       <h1>دید گاه ها</h1>
                       <div className={styles.stars}>
                           <Star1 className={styles.stars_empty}/>
                           <Star1/>
                           <Star1/>
                           <Star1/>
                           <Star1/>
                       </div>

                   </div>
                   <Button color={"secondary"} className={styles.commets_headers_title_button}>
                       <AddCommetns button={`افزودن کامنت`}/>
                   </Button>
               </div>
               <div className={styles.cards_comments}>
                   <CardComments/>
               </div>
           </div>
        </>
    )
}