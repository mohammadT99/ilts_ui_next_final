import styles from '@/styles/cardproduct.module.scss' ;
import {Bag} from 'iconsax-react';
import {Button, Image, Link} from '@nextui-org/react';


export default function CardProduct({data}) {
    return (
        <>
            <div className={styles.courses__card}>
                <div className={` transition ${styles.card__item}`}>
                    <div className={styles.card__item__img}>
                        <Image
                            src={data.image}
                            width={150}
                            height={125}
                            alt={""}
                            className={styles.card__item__img_cover}
                        />
                    </div>
                    <div className={styles.card__item__body}>
                        <h2 className={`type-title ${styles.card__item__body_title}`}>{data.title}</h2>
                        <div className={styles.price_sec}>
                            <p className={` flex gap-2 ${styles.price}`}>
                                <span className={styles.price_label}>
                            تومان
                            </span>
                                {data.price}
                            </p>
                            <span className={styles.discount}>%10</span>
                        </div>
                    </div>
                    <Button
                        as={Link}
                        href={`/products/${data.id}`}
                        className={styles.cardbtn}
                        color={'secondary'}
                        startContent={<Bag/>}
                    >

                        افزودن به سبد خرید
                    </Button>
                </div>
            </div>
        </>
    )
}