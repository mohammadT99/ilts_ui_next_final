import styles from '@/styles/dashboard/ticket_send.module.scss';
import Dashboardlayout from "@/layouts/dashboardlayout";
import {Input, Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import {Sen} from "@next/font/google";
import {Send2} from "iconsax-react";
import Headerdashboard from "@/components/DashboardComponents/TitleDashboard";

export default function SendTicket () {
    return (
        <>
            <Dashboardlayout>
               <div className={styles.send_ticket}>
                   <Headerdashboard  title={'درخواست پشتیبانی'}/>
                   <div className={styles.send_ticket_content}>
                    <div className={styles.send_ticket_content_forms}>
                        <form className={styles.send_ticket_content_forms_inputs}>
                            <Input
                                type="email"
                                label="نام"
                                variant="bordered"
                                className={styles.inputs}
                            />
                            <Input
                                type="email"
                                label="نام خانوادگی"
                                variant="bordered"
                                className={styles.inputs}
                            />
                            <Input
                                type="email"
                                label="نام خانوادگی"
                                variant="bordered"
                                className={styles.inputs}
                            />
                            <Input
                                type="email"
                                label="نام خانوادگی"
                                variant="bordered"
                                className={styles.inputs}
                            />
                            <Textarea
                                label="توضیحات"
                                variant="bordered"
                                placeholder="متن خود را وارد کنید"
                                disableAnimation
                                className={`w-[420px] ${styles.inputs_text}`}
                            />

                        </form>
                       <div className={styles.send_ticket_content_forms_buttons}>
                           <Button color={'primary'}>
                               ارسال پیام
                               <span><Send2/></span>
                            </Button>
                       </div>
                    </div>
                   </div>
               </div>
            </Dashboardlayout>
        </>
    )
}