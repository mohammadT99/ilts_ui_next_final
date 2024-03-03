import styles from '@/styles/package.module.scss';
import {Accordion, AccordionItem, Avatar, Button, Card, CardBody, Divider, Tab, Tabs} from "@nextui-org/react";

import Header from "@/components/Global/Header/Header";

import Breadcrumb from '@/components/bradcrump';
import {useRouter} from 'next/router';
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {Bag} from "iconsax-react";
import BarBack from "@/components/BarBack";
import DefaultLayout from "@/layouts/default";
import {Link} from "@nextui-org/link";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import {BookmarkIcon} from "@/components/BookmarkIcon";
import DescriptionTab from "@/components/DescriptionTab/DescriptionTab";
import NewBreadcrumbs from "@/components/NewBreadcrumbs";
import Image from "next/image";
import banner from '../../public/header.svg'
import endBanner from '../../public/end_background.png'

import {User} from "@nextui-org/react";
import LightNavBar from "@/components/LightNavBar";
import LightBreadcrumb from '@/components/bradcrump/LightBreadcrumb';

export default function Page() {
    const router = useRouter();

    const slug = router.query.slug
    console.log(slug)
    const [product, setProduct] = useState({})
    const [isLoad, setIsLoad] = useState(true)
    const showProduct = () => {
        if (slug) {
            fetch(`https://fakestoreapi.com/products/${slug}`)
                .then((response) => response.json())
                .then((data) => {
                    setIsLoad(false)
                    setProduct(data)
                });


            setTimeout(() => {
                if (!product) {
                    toast('مشکلی به وجود امده لطفا دوباره امتحان کنید!!');
                }
            }, 5000)
        }


    }


    useEffect(() => {
        showProduct();
    }, [slug]);

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <>
            <LightNavBar/>

            <div className={styles.main_header}>
                <Image src={banner} className={styles.main_background} alt={'asd'}/>

                <LightBreadcrumb/>
                <div className={styles.main_header_sec}>
                    <div className={styles.main_header_info}>

                        <h1 className={`${styles.main_title} `}>
                            دوره لیسنینگ آیلتس

                        </h1>


                        <p className={`${styles.main_sub_title} `}>
                            لورم ایپسوم متن ساختگی با تولید سادگی
                        </p>


                        <Button startContent={<Bag/>} size={'lg'} color={'primary'} className={styles.btn}>
                            سرفصل ها
                        </Button>


                    </div>
                    <div className={styles.video_player_sec}>
                        <div className={styles.player_conroller}>
                            <VideoPlayer/>
                        </div>


                    </div>

                </div>


                <div className={styles.main_header_cart_sec}>
                    <div className={styles.main_header_cart_inner}>
                        <div className={`${styles.main_header_cart} ${styles.have_divider}`}>
                                   <span className={styles.cart_title}>
                                       طول دوره
                                    </span>
                            <span className={styles.cart_body}>
                                    ۵۵ ساعت آموزش</span>

                        </div>

                        <div className={styles.main_header_cart}>
                                   <span className={styles.cart_title}>
                                       طول دوره
                                    </span>
                            <span className={styles.cart_body}>
                                    ۵۵ ساعت آموزش</span>

                        </div>

                    </div>
                    <div className={styles.teacher_sec}>
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large"/>
                        <div className={styles.teacher_info}>
                            <p className={styles.teacher_info_title}>
                                مدرس : علی برجی
                            </p>
                            <p className={styles.teacher_info_sub_title}>
                                ۷ سال سابفه تدریس دکترای آموزش زبان انگلیسی
                            </p>
                        </div>
                    </div>


                </div>
            </div>


            <div className={styles.product_description}>
                <h2>
                    طراحان گرافیک

                </h2>

                <p>

                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                    چاپگرها و
                    متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                    و
                    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال
                    و
                    آینده،
                    شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                    علی
                    الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که
                    تمام و
                    دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                    دستاوردهای
                    اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
                    ساختگی
                    با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                    روزنامه و
                    مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                    هدف
                    بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                    جامعه
                    و
                    متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
                    خلاقی،
                    و
                    فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در
                    ارائه
                    راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
                    جوابگوی
                    سوالات
                    پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی
                    نامفهوم
                    از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
                    سطرآنچنان
                    که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی
                    می
                    باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
                    تا
                    با
                    نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
                    فارسی
                    ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت
                    تایپ
                    به
                    پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                    موجود
                    طراحی
                    اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                    استفاده
                    از
                    طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                    شرایط
                    فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
                    شصت و
                    سه
                    درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                    را
                    برای
                    طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
                    توان
                    امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
                    نیاز
                    شامل
                    حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                    گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                    است،
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                    مورد
                    نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
                    گذشته
                    حال
                    و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                    رایانه
                    ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
                    که
                    تمام
                    و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                    دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم
                    ایپسوم
                    متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                    بلکه
                    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                    کاربردهای
                    متنوع
                    با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
                    فراوان
                    جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان
                    خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                    موجود
                    در
                    ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
                    جوابگوی
                    سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید
                    سادگی
                    نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
                    ستون و
                    سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                    ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان
                    را
                    می
                    طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                    پیشرو
                    در
                    زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
                    شرایط
                    سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                    اهل
                    دنیای
                    موجود طراحی اساسا مورد استفاده قرار گیرد.

                </p>


            </div>


            <div className={styles.product_session_title_sec}>
                <h2 className={styles.product_session_title_main}>
                    سرفصل‌های دوره
                </h2>

                <div className={styles.product_session_title}>
                    <Accordion variant="splitted">
                        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            {defaultContent}
                        </AccordionItem>
                    </Accordion>
                </div>

            </div>


            <div className={styles.cart}>
                <h2 className={styles.cart_title}>
                    با خیال راحت آموزش ببینید

                </h2>

            </div>
        </>

    )
}