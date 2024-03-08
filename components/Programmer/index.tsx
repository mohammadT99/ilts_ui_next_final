import styles from '@/styles/programmer.module.scss' ;
import CardProduct from "@/components/CradProduct";
export default function  Programmer () {
    const data = [
        {
            title:'ali' ,
            price:25 ,
            cover:'text'

        }
    ]
    return (
        <>
            <section className={styles.program}>
                <div className={`container-box`}>
                    <div className={styles.program__hrader}>
                        <h1><span className={`text-blue-600`}>درباره</span> برنامه ها</h1>
                        <p>orem Epsom یک متن ساختگی است که با سادگی نامفهومی از چاپ تولید شده است
                            صنعت و توسط طراحی گرافیکی چاپگرها و متون و همچنین روزنامه و مجله استفاده می شود </p>
                    </div>
                    <div className={styles.program__crad}>
                        <CardProduct data={data} />
                        <CardProduct data={data} />
                        <CardProduct data={data} />
                    </div>
                </div>
            </section>
        </>
    )
}