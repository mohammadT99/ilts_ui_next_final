import React from "react";
import {Breadcrumbs, BreadcrumbItem, breadcrumbs} from "@nextui-org/react";
import {HomeIcon} from "@/components/HomeIcon";
import styles from '@/styles/package.module.scss'
export default function LightBreadcrumb() {
    return (
        <div className={styles.light_breadcrumbs}>
            <Breadcrumbs
                color={'primary'}
                isDisabled
                         separator="/"
                         itemClasses={{
                             separator: "px-2"
                         }}
            >
                <BreadcrumbItem startContent={<HomeIcon />}>خانه</BreadcrumbItem>
                <BreadcrumbItem>محصولات</BreadcrumbItem>
                <BreadcrumbItem>محصول تست</BreadcrumbItem>
            </Breadcrumbs>


        </div>

    );
}