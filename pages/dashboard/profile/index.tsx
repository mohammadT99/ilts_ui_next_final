import styles from '@/styles/dashboard/profile.module.scss';
import Dashboardlayout from "@/layouts/dashboardlayout";
import Headerdashboard from "@/components/DashboardComponents/TitleDashboard";
import {Input} from "@nextui-org/input";
import UserImage from '@/public/Images/user_1.png' ;
import Image from "next/image";
import {ImportCurve, Login} from "iconsax-react";
import {Button} from "@nextui-org/react";


export default function Profile () {
    return (
        <>
            <Dashboardlayout>
                <Headerdashboard title={'پروفایل'}/>
                <div className={` ${styles.profile}`}>
                    <div className={styles.profile_content}>
                        <div className={styles.profile_content_edit}>
                            <div className={styles.profile_content_edit_header}>
                                <h1>اطلاعات عمومی</h1>
                            </div>
                            <div className={styles.profile_content_edit_content}>
                                <form className={styles.profile_content_edit_content_form}>
                                    <Input label={'نام'} variant={'bordered'}
                                           className={styles.profile_content_edit_content_form_input}/>
                                    <Input label={'نام خانوادگی'} variant={'bordered'}
                                           className={styles.profile_content_edit_content_form_input}/>

                                </form>
                                <div className={styles.profile_content_edit_content_user}>
                                    <Image src={UserImage} alt={''}/>
                                    <h1>سارا رجبی</h1>
                                    <div className={styles.profile_content_edit_content_user_upload}>
                                        <ImportCurve/>
                                        <span>
                                            عکس خود را اپلود کنید
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.profile_content_edit}>
                            <div className={styles.profile_content_edit_header}>
                                <h1> اطلاعات تماس</h1>
                            </div>
                            <div className={styles.profile_content_edit_content}>
                                <form className={styles.profile_content_edit_content_form}>
                                    <Input label={' تلفن همراه'} variant={'bordered'}
                                           className={styles.profile_content_edit_content_form_input}/>
                                    <Input label={'  ایمیل '} variant={'bordered'}
                                           className={styles.profile_content_edit_content_form_input}/>
                                </form>

                            </div>
                        </div>
                        <div className={styles.profile_content_edit}>
                            <div className={styles.profile_content_edit_header}>
                                <h1> امنیت</h1>
                            </div>
                            <div className={styles.profile_content_edit_content}>
                                <form className={styles.profile_content_edit_content_form}>
                                    <Input label={'رمز عبور'} variant={'bordered'}
                                           className={styles.profile_content_edit_content_form_input}/>
                                    <Input label={'تکرار رمز عبور '} variant={'bordered'}
                                           className={styles.profile_content_edit_content_form_input}/>
                                </form>

                            </div>
                        </div>
                        <Button color={'primary'} className={`mt-5 `}>اعمال تعقیرات</Button>
                    </div>

                </div>
            </Dashboardlayout>
        </>
    )
}