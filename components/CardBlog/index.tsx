import React from "react";
import styles from  "@/styles/card_blog.module.scss"
import imageblog from '@/public/Images/imageProduct.png'
import Image from "next/image";

import {Comment} from "postcss";
import {Messages2} from "iconsax-react";
import {Link} from "@nextui-org/link";
export default function  CardBlog (){

    const article= [
        {
            title:'روش های یادگیری زبان' ,
            description:''
        }
    ]
    return (
        <>
            <Link className={styles.card_blog} href={'/blog/test'}>
                <Image src={imageblog} alt={''} />
                <div className={styles.title}>
                    <p>اموزش زبان</p>
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
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود</p>
                    </div>
                </div>
            </Link>
        </>
    )
}