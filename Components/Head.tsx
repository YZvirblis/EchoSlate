// components/Head.js
import NextHead from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

const Head = ({ slug, excerpt }: any) => {
    const title = `EchoSlate: ${slug ? slug : "Unleash Your Sonic Creativity"}`
    const description = `${excerpt ? excerpt : "Explore the world of music production with EchoSlate. Dive into tutorials, gear reviews, and artist insights tailored for the modern producer."}`
    return (
        <>
            <DefaultSeo { ...SEO } />
            <NextHead>
                <title>{ title }</title>
                <meta property='description' content={ description } />
                <meta property='og:title' content={ title } />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                {/* Add any other additional tags here */ }
            </NextHead>
        </>
    );
};

export default Head;
