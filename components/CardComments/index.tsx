import styles from '@/styles/card_comments.module.scss';
import Avatar from "@/components/Avatar";
import {Button, Tooltip, User} from "@nextui-org/react";
import {Receipt, Repeat, Star1} from "iconsax-react";
import AddCommetns from "@/components/Comments/Components/AddCommetns";

export default  function CardComments () {
    return (
        <>
            <div className={styles.card_commetns}>
                <div className={styles.card_commetns_header}>
                    <div className={styles.card_commetns_user}>
                        <User
                            name="سارا "
                            description="دانش اموز  "
                            avatarProps={{
                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                            }}
                        />
                    </div>
                    <div className={styles.card_commetns_stars}>
                        <div className={`flex gap-1 ${styles.card_commetns_stars_icons}`}>
                            <Star1/>
                            <Star1/>
                            <Star1/>
                            <Star1/>
                            <Star1/>
                        </div>
                        <Tooltip showArrow={true} content={'افزودن پاسخ'}>
                            <Button className={` ${styles.card_commetns_stars_button} `}>
                                <AddCommetns button={<Repeat/>}/>
                            </Button>
                        </Tooltip>

                    </div>
                </div>
                <div className={styles.card_commetns_content}>
                    <p>سلام.خسته تباسید و ممنون بایت زحماتتون.ببخشید من میخوام دوره طراحی وب و وبسایت و بگذرونم.ولی
                        اینطور که متوجه شدم طراحی وب از دوبخش فرانت اند(html,جاوااسکریپت،css) و بک اند (پایتون c
                        و..)شکیل شده ؛ آیا برای اینکه بتونم طراح وب بشم و از راه طراحی وب سایت که علاقه دارم بهش و بعد
                        گذراندن دوره به درامد برسم باید بخش بک اند و زبان هایی مثل پایتون و.. رو هم دوره هاشون و
                        بگذرونم؟؟ممنون میشم جواب بدین(راهنمای)؟؟سپاس</p>
                </div>
                <div className={styles.card_commetns_content_replase}>
                    <User
                        className={styles.card_commetns_content_replase_user}
                        name="سارا "
                        description=" مدرس "
                        avatarProps={{
                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                        }}
                    />
                    <p>درود شما میتونید یکی از دو حوزه فرانت اند یا بک اند رو انتخاب کنید و در اون حرفه ای بشید. این دو به تنهایی هم بسیار پولساز هستند. اگر هردو رو بخواید یاد بگیرید به طبع باید زمان بیشتری بگذارید. اما میشه اول در یکی حرفه ای شد و همزمان با کسب درآمد به یادگیری دومی پرداخت منتها این مسیر نیازمند برنامه ریزی دقیق و پشتکار هست. برای فرانت اند کافیه html و css و جاوا اسکریپت رو یاد بگیرید (و احیانا یک فریمورک پرطرفدار مثل ری اکت) برای بک اند هم باید یکی از زبانهای پایتون، php ، جاوا و... رو انتخاب کنید.</p>
                </div>
            </div>
        </>
    )
}