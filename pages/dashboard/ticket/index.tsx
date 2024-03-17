import Dashboardlayout from "@/layouts/dashboardlayout";
import styles from '@/styles/dashboard/ticket.module.scss' ;
import Headerdashboard from "@/components/DashboardComponents/TitleDashboard";
import Tabele from "@/components/DashboardComponents/TabelTest";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import {Search} from "@nextui-org/shared-icons";
import {SearchNormal} from "iconsax-react";


export default  function Ticket () {
    return(
        <>
            <Dashboardlayout>
                <div className={styles.ticket}>
                    <Headerdashboard title={'پشتیبانی'}/>
                    <div className={styles.ticket_content}>
                        <div className={styles.ticket_content_filter}>
                            <Input label={'جستجو کنید'} variant={'faded'} className={styles.ticket_content_filter_inputs} />
                            <Button className={styles.ticket_content_filter_button} color={'secondary'} startContent={<SearchNormal/>}>جستجو کنید</Button>
                        </div>
                        <Tabele/>
                    </div>
                </div>
            </Dashboardlayout>
        </>
    )
}