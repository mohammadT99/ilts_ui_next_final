import styles from '@/styles/programmer.module.scss' ;
import CardProduct from "@/components/CradProduct";
import {useEffect, useState} from "react";
export default function  Programmer () {
    const [blog, setBlog] = useState([])
    const [loading, setLoading] = useState()
    const show = async () => {
        const response = await fetch('https://fakestoreapi.com/products?limit=3')
        const data = await response.json();
        if(data) {
            setBlog(data)
            setLoading(false)
        }
    }
    useEffect(() => {
        show()
    }, []);
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
                        {
                            blog.map((item , key ) => {
                                return (
                                    <>
                                        <CardProduct data={item} key={key}/>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}