import styles from '@/styles/sales_advisor.module.scss' ;
import {Figma} from "iconsax-react";
import {Button} from "@nextui-org/react";
export default function SalesAdvisor () {
    return (
        <>
            <div className={styles.sales_advisor}>
                <div className={styles.sales_advisor_content}>
                    <div className={styles.sales_advisor_content_left}>
                        <Figma size={35}/>
                        <h1>متخصص React</h1>
                        <div className={styles.sales_advisor_content_left_line}></div>
                            <p>به جامعه متخصصین آموز زبان  بپیوندید...</p>
                    </div>
                    <div className={styles.sales_advisor_content_right}>
                        <Button color={"secondary"} className={`px-10`}> مشاروه رایگان</Button>
                        <Button color={"primary"} className={`px-10`}>ثبت نام</Button>
                    </div>
                </div>
            </div>
        </>
    )
}