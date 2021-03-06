import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/website';

const title = config.siteTitle;
const description = config.siteDescription;
const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
const image = config.siteUrl + realPrefix + config.siteLogo;
const blogURL = config.siteUrl + config.pathPrefix;

import favicon16 from '../images/favicons/favicon-16x16.jpg';
import favicon32 from '../images/favicons/favicon-32x32.jpg';
import faviconICO from '../images/favicons/favicon.ico';
import faviconAppleTouch from '../images/favicons/apple-touch-icon.jpg';

const schemaOrgJSONLD = [
  {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: blogURL,
    name: title,
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
  }
];


// do not rerender component
export const Seo = React.memo((props) => {
  return (
    <Helmet>
      <html lang={config.siteLanguage} />
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href={faviconAppleTouch} />
      <link rel="icon" type="image/jpg" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/jpg" sizes="16x16" href={favicon16} />
      <link rel="shortcut icon" href={faviconICO} />
      <meta name="msapplication-TileColor" content={config.backgroundColor} />
      <meta name="msapplication-config" content="browserconfig.xml" />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      <meta property="og:locale" content={config.ogLanguage} />
      <meta property="og:site_name" content={config.ogSiteName} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="{siteUrl}}" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.siteFBAppID ? config.siteFBAppID : ''} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}, () => { return true });
