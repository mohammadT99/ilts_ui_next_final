import React from "react";
import styles from  "@/styles/card_blog.module.scss"
import imageblog from '@/public/Images/imageProduct.png'


import {Comment} from "postcss";
import {Messages2} from "iconsax-react";
import {Link} from "@nextui-org/link";
import {Image} from "@nextui-org/react";
export default function  CardBlog ({data}){

    const article= [
        {
            title:'روش های یادگیری زبان' ,
            description:''
        }
    ]
    return (
        <>
            <Link className={styles.card_blog} href={`/blog/id:${data.id}`}>
                <Image src={data.image} alt={''} width={170} height={100} className={styles.card_blog_cover} />
                <div className={styles.title}>
                    <p>{data.title}</p>
                    </div>
                <div className={styles.description}>
                    <div className={styles.box_data}>
                        <div className={styles.box_card}>
                            <div className={styles.box_card_title}>
                                <p> بهمن</p>
                                <p>۲۶</p>
                            </div>

                        </div>
                        <div className={styles.box_card}>
                            <Messages2/>
                            <p>۱۲</p>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <p>{data.description}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}