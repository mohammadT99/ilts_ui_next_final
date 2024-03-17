import React from "react";
import {Head} from "@/layouts/head";
import NavbarSite from "@/components/navbar";
import Footer from "@/components/Global/Header/Footer";
import SidebarDashboard from "@/components/DashboardComponents/Sidebar";
import styles from '@/styles/dashboard/layout_dashboard.module.scss';
import {Input} from "@nextui-org/input";
export default function Dashboardlayout ({children}:{children: React.ReactNode;}) {
    return(
        <>
            <Head />
            <NavbarSite />
            <main className={`flex container-box ${styles.dashboard_grid}`}>
                <SidebarDashboard/>
                    <div className={styles.child_dashboard}>
                        {children}

                    </div>
            </main>
            <Footer />
        </>
    )
}