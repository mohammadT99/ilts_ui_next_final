import Dashboardlayout from "@/layouts/dashboardlayout";
import Headerdashboard from "@/components/DashboardComponents/TitleDashboard";

export default function Dashboard () {
    return (
        <>
            <Dashboardlayout>
                <Headerdashboard title={'داشبورد'}/>
            </Dashboardlayout>
        </>
    )
}