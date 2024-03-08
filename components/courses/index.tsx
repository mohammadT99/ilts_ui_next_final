
import styles from '@/styles/courses.module.scss' ;
import {Button} from "@nextui-org/react";
import CardProduct from "@/components/CradProduct";


export default function Courses(){
    type data = [
        title:string ,
        price:number  ,
        cover:string ,


    ]
    const data = [
        {
            title:'ali' ,
            price:25 ,
            cover:'text'

        }
    ]
    return (
        <>
            <section className={styles.courses}>
                <div className={styles.courses_content}>
                    <div className={styles.courses__filters}>
                        <Button className={`border-1 bg-white ${styles.btn_card}`}>کلاس خصوصی</Button>
                        <Button className={`border-1 bg-white ${styles.btn_card}`}>کلاس خصوصی</Button>
                        <Button className={`border-1 bg-white ${styles.btn_card}`}>کلاس خصوصی</Button>
                        <Button className={`border-1 bg-white ${styles.btn_card}`}>کلاس خصوصی</Button>

                    </div>
                    <div className={styles.courses__cards}>
                       <CardProduct data={data} />
                        <CardProduct data={data} />
                        <CardProduct data={data} />
                    </div>
                </div>
            </section>
        </>
    )
}