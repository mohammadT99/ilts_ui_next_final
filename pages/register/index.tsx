import styles from '@/styles/login.module.scss' ;
import {Input} from "@nextui-org/input";
import {User , Eye  , EyeSlash} from "iconsax-react";

import ImageLogin from '@/public/Images/logo.png';
import ImageLoginBanner from '@/public/Images/backgroundLogin.png';
import Image from "next/image";
import {useState} from "react";
import {Button, Checkbox} from "@nextui-org/react";
import TwiterIcon from '@/public/Images/twitter@512px.png' ;
import GoogleIcon from '@/public/Images/google.png';
import {Link} from "@nextui-org/link";


export default function Register() {
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [isVisible, setIsVisible] = useState(false);
    return (
        <section className={styles.login_content}>
            <div className={styles.login__content__forms}>
                <div className={styles.login__content__forms__lgo}>
                    <Image src={ImageLogin} alt={''}/>
                    <h1><span className={`text-blue-500`}>Edu</span>cation</h1>
                </div>
                <div className={styles.login__content__forms__head}>
                    <h1> ثبت نام </h1>
                    <Link  href={'/login'} className={`text-blue-500`}>
                        <span className={`text-gray-500`}>ایا حساب کاربری دارید ?</span>  وارد شوید!
                    </Link>
                </div>
                <form className={styles.form_group}>
                    <div className={styles.input_group}>
                        <Input
                            label={'نام کاربری'}
                            type="email"
                            endContent={
                                <User color={'#aaa'} size={'20'}/>
                            }
                        />
                    </div>
                    <div className={styles.input_group}>
                        <Input
                            label="رمز عبور"
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                    {isVisible ? (
                                        <EyeSlash className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <Eye className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                            }
                            type={isVisible ? "text" : "password"}
                            className={styles.input_group}
                        />

                    </div>

                    <div className={styles.forgut_and_save}>
                        <div className={styles.save}>
                            <Checkbox>
                                <span className={`mx-2 text-gray-500`}>
                                    ورود خودکار
                                </span>
                            </Checkbox>

                        </div>
                        <Button className={` bg-white ${styles.forgut}`}>
                            رمز عبور خود را فراموش کرده اید?
                        </Button>
                    </div>
                    <Button className={` ${styles.btn__login} `}> ورود</Button>
                    <div className={styles.line}>
                        <span>یا</span>
                    </div>
                    <Button className={styles.box__link}>
              <span>
              <Image src={GoogleIcon} alt={'goole'} />
              </span>
                        <p>ورود با اکانت گوگل</p>
                    </Button>
                    <Button className={styles.box__link}>
              <span>
                <Image src={TwiterIcon} alt={''} width={24} />
              </span>
                        <p> ورود با اکانت توییتر </p>
                    </Button>
                </form>
            </div>

            {/*<div className={styles.login__img}>*/}
            {/*    <Image src={ImageLoginBanner} width={650}  alt=""/>*/}
            {/*</div>*/}

        </section>
    )

}
