import NormalLayout from '@/components/Layout/NormalLayout';
import React, { ReactElement } from 'react'

const BlogDetail = () => {
    return (
        <div>Blog</div>
    )
}

BlogDetail.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <NormalLayout pageTitle='Blog'>
                {page}
            </NormalLayout>
        </>
    );
};

export default BlogDetail