import Image from "next/image";
import HeaderSvg from '@/public/Images/Vector@2x.png';
import styles from '@/styles/svg_header.module.scss';
export default function SvgHeader () {
    return(
        <>
            <div className={styles.svg_hrader}>
                <Image src={HeaderSvg} width={100}  alt={'header_svg'} />
            </div>
        </>
    )
}