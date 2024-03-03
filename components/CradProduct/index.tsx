import styles from '@/styles/cardproduct.module.scss' ;
import {Bag} from 'iconsax-react';
import {Button, Image, Link} from '@nextui-org/react';


export default function CardProduct({data}) {
    return (
        <>
            <div className={styles.courses__card}>
                <div className={styles.card__item}>
                    <div className={styles.card__item__img}>
                        <Image
                            src={data.image}
                            width={400}
                            height={200}
                            alt={""}

                        />
                    </div>
                    <div className={styles.card__item__body}>
                        <h2 className={'type-title'}>{data.title}</h2>
                        <p className={styles.price_sec}>
                          <span className={styles.price}>
                              {data.price}
                          </span>
                            <span className={styles.price_label}>
                            تومان
                            </span>

                        </p>
                    </div>
                    <Button
                        as={Link}
                        href={`/products/${data.id}`}
                        className={styles.cardbtn}
                        color={'primary'}
                        startContent={<Bag/>}
                    >

                        افزودن به سبد خرید
                    </Button>
                </div>
            </div>
        </>
    )
}