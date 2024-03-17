import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

export default function App() {
    return (
            <Table aria-label="Example empty table">
            <TableHeader     >
                <TableColumn>نام</TableColumn>
                <TableColumn>عنوان مشکل</TableColumn>
                <TableColumn>وضعیت</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"دیتای وجود ندارد!!"}>{[]}</TableBody>
        </Table>
    );
}
