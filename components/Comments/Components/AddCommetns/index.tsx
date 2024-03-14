import styles from  '@/styles/add_comments.module.scss';

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    button
} from "@nextui-org/react";
import {Repeat, Send2} from "iconsax-react";
import {Input, Textarea} from "@nextui-org/input";

export default  function AddCommetns ({button}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>
            <Button onPress={onOpen} className={styles.button}>{button}</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className={styles.module}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex  gap-1 justify-center mt-5 text-md">ما همه سوالات و دیدگاه‌ها رو می‌خونیم و پاسخ میدیم</ModalHeader>
                            <ModalBody >
                                <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
                                    <Input type="email" label="نام خود را وارد کنید"/>
                                    <Input type="email" label="ایمیل خود را وارد کنید"/>
                                    <Textarea

                                        label="پاسخ به کامنت"
                                        placeholder="متن پاسخ را وارد کنید"
                                        className="max-w-3xl"
                                    />

                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    بستن
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    ارسال
                                    <Send2/>
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}