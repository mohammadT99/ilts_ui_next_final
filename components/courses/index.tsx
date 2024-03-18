
import styles from '@/styles/courses.module.scss' ;
import {Button} from "@nextui-org/react";
import CardProduct from "@/components/CradProduct";
import {useEffect, useState} from "react";
import CardLoarder from "@/components/CardLoader";


export default function Courses(){
    const [facke , setFacke ] = useState([])
    const [loading , setLoading ] = useState(true)
    const show = async () => {
        const response = await fetch('https://fakestoreapi.com/products?limit=3')
        const data = await response.json();
        if(data) {
            setFacke(data)
            setLoading(false)
        }
    }
    useEffect(() => {
        show()
    }, []);
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
                        {
                            loading?(
                                <div className={'flex gap-4'}>
                                    <CardLoarder/>
                                    <CardLoarder/>
                                    <CardLoarder/>
                                </div>
                            ):(
                                facke.map((item , key ) => {
                                    return(
                                        <CardProduct data={item} key={key}/>
                                    )
                                })
                            )
                        }

                    </div>
                </div>
            </section>
        </>
    )
}