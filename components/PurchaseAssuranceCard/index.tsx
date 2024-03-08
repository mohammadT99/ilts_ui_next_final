import styles from '@/styles/purchase_ssurance.module.scss' ;
import {list} from "postcss";
import {MoneyRecive} from "iconsax-react";

interface Item {
    title:string ,
    description : string ,
    icon : string  [] ,

}
export default function PurchaseAssuranceItems () {




    return (
        <>
            <div className={styles.purches_items}>
                <div className={styles.purches_items_image}>
                    <MoneyRecive size={35}/>
                </div>
                <div className={styles.purches_items_texts}>
                    <h2>ضمانت بازگشت وجه</h2>
                    <p>خرید و ثبت نام شما در دوره‌های بلندمدت سون لرن بدون ریسک مالی خواهد بود</p>
                </div>
            </div>
        </>
    )
}