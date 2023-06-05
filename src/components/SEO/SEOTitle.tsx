import Head from 'next/head'
import React, { FC } from 'react'

// TODO : Add Favicon

interface SEOTitleProps {
    pageTitle: string
}

const SEOTitle: FC<SEOTitleProps> = ({ pageTitle }) => {
    return (
        <Head>
            <title>{pageTitle}</title>
        </Head>
    )
}

export default SEOTitle