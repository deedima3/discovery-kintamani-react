import Link from 'next/link';
import React, { FC } from 'react'

interface BreadcrumbProps {
    breadcrumbArray: BreadcrumbData[]
}

export interface BreadcrumbData {
    route: string;
    label: string;
    isBold: boolean;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ breadcrumbArray }) => {
    return (
        <div className='flex flex-col gap-1 text-lg font-poppins' aria-label='Breadcrumb'>
            {breadcrumbArray && breadcrumbArray.map(({ route, label, isBold }, index) => {
                return <Link href={route} key={route} className={`${isBold ? 'font-bold' : ""}`}>
                    {label}
                    {index != breadcrumbArray.length && "/"}
                </Link>
            })}
        </div>
    )
}

export default Breadcrumb