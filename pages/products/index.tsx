import styles from '@/styles/package.module.scss';
import {useEffect, useState} from 'react';
import Breadcrumb from '@/components/bradcrump';
import CardProduct from '@/components/CradProduct';
import Sidebar from '@/components/Sidebar';

import DefaultLayout from "@/layouts/default";
import CardLoarder from "@/components/CardLoader";
import {toast} from "react-toastify";


const Index = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);


    const showProduct = () => {

        fetch('https://fakestoreapi.com/products?limit=7')
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
                setLoading(false)

            })
        // setTimeout(() => {
        //     if (product.length === 0) {
        //         toast('مشکلی به وجود امده لطفا دوباره امتحان کنید!!');
        //     }
        // }, 5000)

    }


    useEffect(() => {
        showProduct();
    }, []);

    return <DefaultLayout>
        <div className="container-box">
            <Breadcrumb links='محصولات' links_before=''/>
            <div className={styles.content_products}>

                <div className={styles.content_product_list}>
                    {
                        product.length === 0 ? (
                            <>
                                <CardLoarder/>
                                <CardLoarder/>
                                <CardLoarder/>
                            </>
                        ) : (
                            <>
                                {product.map((item, key) => {
                                    return (
                                        <CardProduct key={key} data={item}/>
                                    )
                                })}
                            </>
                        )
                    }
                </div>
                <Sidebar/>
            </div>
        </div>
    </DefaultLayout>


}

export default Index;