import styles from '@/styles/package.module.scss';
import {Accordion, AccordionItem, Avatar, Button, Card, CardBody, Divider, Tab, Tabs} from "@nextui-org/react";

import Header from "@/components/Global/Header/Header";

import Breadcrumb from '@/components/bradcrump';
import {useRouter} from 'next/router';
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {ArrowCircleDown2, Bag, DocumentText, Firstline, ShieldTick, Task} from "iconsax-react";
import DefaultLayout from "@/layouts/default";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import Image from "next/image";
import banner from '../../public/header.svg'
import PurchaseAssuranceItems from "@/components/PurchaseAssuranceCard";
import CourseResults from "@/components/CourseResults";
import SalesAdvisor from "@/components/SalesAdvisor";
import CourseInstructor from "@/components/CourseInstructor";
import VideoSection from "@/components/VideoSection";

export default function Page() {
    const router = useRouter();
    const [addh, setAddh] = useState(false)

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
        }

    }

    // add width
    const Addwidth = () => {
        const p: any = document.getElementById('desc')
        const i: any = document.getElementById('icon')
        p.classList.toggle(styles.add_h);
        i.classList.toggle(styles.product_description__btn__icon)

    }

    //
    // useEffect(() => {
    //     showProduct();
    // }, [slug]);


    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <>
            <DefaultLayout>
                <SalesAdvisor/>
                <div className={styles.main_header}>
                    <Image src={banner} className={styles.main_background} alt={'asd'}/>


                    <div className={styles.main_header_sec}>
                        <div className={styles.main_header_info}>

                            <h1 className={`${styles.main_title} `}>
                                دوره لیسنینگ آیلتس

                            </h1>


                            <p className={`${styles.main_sub_title} `}>
                                محبوب‌ترین کتابخانه جاوااسکریپت
                            </p>


                            <Button startContent={<Bag/>} size={'lg'} color={'primary'} className={styles.btn}>
                                سرفصل ها

                            </Button>


                        </div>
                        <div className={styles.video_player_sec}>
                            <div className={styles.video_player_sec_bg}></div>
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
                                <span className={` ${styles.cart_body}`}>
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
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                                    className="w-20 h-20 text-large"/>
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

                    <h2 className={`flex items-center gap-4 ${styles.product_description_title}` }>
                        <DocumentText size={60} color={'#525fe1'} className={`align-middle`}/>
                        آشنایی با دوره متخصص React (ری اکت دولوپر)

                    </h2>

                    <p id={'desc'}>

                        React یکی از کتابخانه‌های متن باز و رایگان جاوا اسکریپت است که توسط فیسبوک و برای بهبود طراحی
                        رابط کاربری در وب عرضه شده است. هدف React این است که روند توسعه ساده و سریع شود و یادگیری آن
                        فرصت‌های شغلی جدیدی را برای شما به ارمغان می‌آورد. ویژگی‌های کاربردی این کتابخانه باعث شده که
                        اغلب برنامه‌نویسان جاوا اسکریپت برای یادگیری آن اقدام کنند. در نگاه اول شاید برخی تصور کنند که
                        React Native بسیار شبیه به React یا همان ReactJs است اما تفاوت‌های زیادی بین این دو وجود دارد و
                        یکی نیستند. React Native یک فریم‌ورک کراس پلتفرم زبان جاوا اسکریپت است درحالی‌که React یکی از
                        کتابخانه‌های این زبان محسوب می‌شود.

                        این دوره شما را به خوبی با کتابخانه React آشنا می‌کند و اگر به فکر افزایش سطح مهارت خود هستید،
                        می‌توانید روی این دوره حساب کنید.

                        اگر که با مفاهیم برنامه نویسی آشنا نیستی و قصد شرکت در دوره آموزش react پروژه محور را داری ،
                        پیشنهاد می‌کنیم ابتدا در دوره الفبای برنامه نویسی لقمان آوند شرکت کنی و بعد از آن مسیر یادگیری
                        برنامه نویسی را به درستی انتخاب کنی.

                        چرا باید در دوره آموزش React شرکت کنیم؟
                        دلایل بسیاری برای این مسئله وجود داره ، اما باید به این نکته مهم اشاره کنیم که در دنیا امروز
                        توجه بسیار ویژه ای به جلوه‌های بصری و UI می‌شود و عده بسیار زیادی از محققان معتقدند که اگر وب
                        سایت یا اپلیکیشنی این طراحی جذاب و کاربرپسند را نداشته باشند شانس اینکه مورد توجه کاربران قرار
                        بگیرند کاهش می‌یابد.

                        آموزش برنامه نویسی ری اکت به شما این امکان را می‌دهد که ظرف مدت کوتاهی بتوانید بهترین UX و UI را
                        برای کابرانتان طراحی و اجرا کنید.

                        آیا دوره ری اکت مناسب برنامه نویسان فول استک است؟
                        به طور کلی هر دوره آموزشی که در مورد مباحث فرانت اند یا بک اند صحبتی به میان می‌آورد مناسب برای
                        برنامه نویسان فول استک است. ری اکت جزو فرانت اند به حساب می‌آید و از این روی کاملا مناسب افرادی
                        است که علاقه به برنامه نویسی فول استک دارند. طراحی اساسا مورد استفاده قرار گیرد.

                    </p>
                    <Button className={styles.product_description__btn} color={"primary"}
                            onClick={Addwidth}><ArrowCircleDown2 id={'icon'}/>مشاهده </Button>
                </div>
                <div className={styles.product_session_title_sec}>
                    <h2 className={styles.product_session_title_main}>
                        <Task size={55} color={'#525fe1'} className={`align-middle`}/>
                        سرفصل‌های دوره

                    </h2>
                    <div className={styles.product_session_title} >
                        <Accordion variant="splitted" className={styles.product_session_title_acc}>
                            <AccordionItem key="1" aria-label="Accordion 1" title={'مقدمه'}>

                                {defaultContent}

                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title=" این دوره به درد چه کسانی میخورد">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Accordion 3" title="اشنایی با سر فصل ها">
                                {defaultContent}
                            </AccordionItem>
                        </Accordion>
                    </div>

                </div>


                <div className={styles.purchase_assurance}>
                    <div className={styles.purchase_assurance_header}>
                        <ShieldTick size={80} color={'#525fe1'} className={`mb-14`}/>
                        <h2 className={styles.purchase_assurance_title}>
                            با خیال راحت آموزش ببینید
                        </h2>
                    </div>
                    <div className={styles.purchase_assurance_items}>
                        <PurchaseAssuranceItems/>
                        <PurchaseAssuranceItems/>
                        <PurchaseAssuranceItems/>
                        <PurchaseAssuranceItems/>

                    </div>
                </div>
                <CourseResults/>
                <CourseInstructor/>
                <VideoSection/>

            </DefaultLayout>
        </>

    )
}