import styles from '@/styles/sidebar.module.scss';
import { Accordion, AccordionItem, Button, Tooltip } from '@nextui-org/react';

export default function Sidebar() {
    const defaultContent = 'loremtext'
    return (
        <>
            <div className={`${styles.sidebar}`}>
                <div className={` flex ${styles.header_sidebar}`}>

                    <Button className={styles.btn_sidebar}>کلاس ها </Button>
                    <Button className={styles.btn_sidebar}>دوره ها </Button>
                    <Button className={styles.btn_sidebar}> محصولات</Button>
                    <Button className={styles.btn_sidebar}>کتاب ها </Button>

                </div>

                <Accordion>
                    <AccordionItem key="1" aria-label="Accordion 1" title="فیلتر 1">
                        <Accordion>
                            <AccordionItem key="1" aria-label="Accordion 1" title="فیلتر 1">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                                {defaultContent}
                            </AccordionItem>
                           
                        </Accordion>
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title="فیلتر 2">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" title="فیلتر 3">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>
            </div>‍‍‍
        </>
    )
}