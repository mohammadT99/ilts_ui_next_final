import styles from '@/styles/dashboard/dashboardheader.module.scss';
export default function Headerdashboard ({title}) {
    return (
        <>
            <div className={styles.send_ticket_header}>
                <span className={styles.send_ticket_header_circle}></span>
                <h1> {title}</h1>
            </div>
        </>
    )
}