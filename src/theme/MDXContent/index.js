import React from 'react';
import MDXContent from '@theme-original/MDXContent';

export default function MDXContentWrapper(props) {
    const frontMatter = props.children?.type?.frontMatter ?? {};
    const showHeader = frontMatter.show_header ?? true;
    const title = frontMatter.header ?? frontMatter.title;

    // We do not want to have the regular title
    frontMatter.hide_title = true;
    return (
        <>
            {showHeader && (
                <div className="text--center">
                    <img src="https://bloom.host/logo-white.svg" alt="Bloom logo"/>
                    {title && <h1>{title}</h1>}
                </div>
            )}

            <MDXContent {...props} />
        </>
    );
}
