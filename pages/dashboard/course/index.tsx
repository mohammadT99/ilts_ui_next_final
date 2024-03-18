import styles from '@/styles/dashboard/course_dashboard.module.scss';
import DefaultLayout from "@/layouts/default";
import Headerdashboard from "@/components/DashboardComponents/TitleDashboard";
import Dashboardlayout from "@/layouts/dashboardlayout";
import Products from "@/pages/products";
import CardProduct from "@/components/CradProduct";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import CardLoarder from "@/components/CardLoader";

export default function Course() {
    const [course, setCourse] = useState([])
    const [loading, setLoading] = useState(true)
    const show = async () => {
        const response = await fetch('https://fakestoreapi.com/products?limit=5')
        const data = await response.json();
        if (data) {
            setCourse(data)
            setLoading(false)
        } else (
            toast('no')
        )
    }
    useEffect(() => {
        show()
    }, []);
    return (
        <>
            <Dashboardlayout>
                <Headerdashboard title={'دوره های خریداری شده'}/>
                <div className={styles.course}>
                    <div className={styles.course_content}>
                        {
                            loading ? (
                                    <div className={styles.course_content_loader}>
                                        <CardLoarder/>
                                        <CardLoarder/>
                                        <CardLoarder/>

                                    </div>
                                ) :
                                course.map((item, key) => {
                                    return (
                                        <CardProduct data={item} key={key}/>
                                    )
                                })

                        }
                    </div>
                </div>
            </Dashboardlayout>
        </>
    )
}