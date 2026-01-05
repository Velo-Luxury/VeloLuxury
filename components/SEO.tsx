import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    type?: 'website' | 'article' | 'product';
    structuredData?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({
    title = 'VELO LUXURY | Premium Car Rental Kuala Lumpur',
    description = 'Experience the finest luxury car rentals in Kuala Lumpur. From sports cars to executive sedans, Velo Luxury provides premium vehicles for business and leisure.',
    keywords = 'luxury car rental, kuala lumpur, car hire malaysia, sports car rental, exotic car rental, mercedes rental, bmw rental, porsche rental',
    image = '/logo.png',
    type = 'website',
    structuredData
}) => {
    const location = useLocation();
    const canonicalUrl = `https://veloluxury.com${location.pathname}`;
    const fullTitle = title.includes('|') ? title : `${title} | VELO LUXURY`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="VELO LUXURY" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};
