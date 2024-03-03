import React from "react";
import {Breadcrumbs, BreadcrumbItem, breadcrumbs} from "@nextui-org/react";
import {HomeIcon} from "@/components/HomeIcon";

export default function NewBreadcrumbs() {
    return (
        <div className={'breadcrumbs-style'}>
            <Breadcrumbs isDisabled
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