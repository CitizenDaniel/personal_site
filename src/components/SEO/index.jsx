import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../data/SiteConfig';

const propTypes = {
  postNode: PropTypes.shape({
    frontmatter: PropTypes.object,
    excerpt: PropTypes.string,
  }),
  metaData: PropTypes.objectOf(PropTypes.string),
};

const defaultProps = {
  postNode: null,
  metaData: null,
};

function SEO({ postNode, metaData }) {
  // initial metadata
  let _metaData = {
    title: config.siteTitle,
    description: config.siteDescription,
    keywords: config.siteKeywords,
    image: config.siteUrl + config.siteLogo,
  };

  // override _metadata if node is blogpost
  if (postNode) {
    _metaData.title = `${postNode.frontmatter.title} / Dan\'s Blog`;
    _metaData.description = postNode.excerpt;
    _metaData.keywords = config.siteKeywords;
    _metaData.image = config.siteUrl + postNode.frontmatter.thumbnail;
  }

  // override _metadata if metadata is set manually
  _metaData = {
    ..._metaData,
    ...metaData,
  };

  // JSON-LD
  const schemaOrgJSONLD = [];

  // JSON-LD Corporation
  schemaOrgJSONLD.push({
    '@context': 'http://schema.org',
    '@type': 'Corporation',
    name: config.corporationName,
    url: config.siteUrl,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '555-5555',
        contactType: 'sales',
      },
    ],
    founder: {
      '@type': 'Person',
      givenName: 'Dan',
      familyName: 'Jacobsen',
    },
    foundingDate: '2019-11-9',
    description: config.siteDescription,
    sameAs: ['https://www.danjacobsen.com'],
  });

  // JSON-LD Breadcrumb
  const breadcrumbItemList = [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@id': config.siteUrl,
        name: config.corporationName,
        image: config.siteLogo,
      },
    },
  ];

  if (postNode) {
    breadcrumbItemList.push({
      '@type': 'ListItem',
      position: 2,
      item: {
        '@id': `${config.siteUrl}/blog/`,
        name: 'Blog',
      },
    });
  }

  schemaOrgJSONLD.push({
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItemList,
  });

  // JSON-LD BlogPosting
  if (postNode) {
    schemaOrgJSONLD.push({
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${config.siteUrl}/blog${postNode.fields.slug}`,
      },
      headline: postNode.frontmatter.title,
      image: [`${config.siteUrl}${postNode.frontmatter.thumbnail}`],
      datePublished: postNode.frontmatter.date,
      dateModified: postNode.frontmatter.dateModified,
      author: {
        '@type': 'Person',
        name: 'Shota Tamura',
      },
      publisher: {
        '@type': 'Organization',
        name: config.corporationName,
        logo: {
          '@type': 'ImageObject',
          url: `${config.siteUrl}/images/logo_for_schema.png`,
        },
      },
      description: postNode.frontmatter.summary,
    });
  }

  return (
    <Helmet
      title={_metaData.title}
      meta={[
        { name: 'description', content: _metaData.description },
        { name: 'keywords', content: _metaData.keywords },
        { name: 'image', content: _metaData.image, property: 'og:image' },
      ]}
      script={[
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(schemaOrgJSONLD),
        },
      ]}
    >
    {/* Global site tag (gtag.js) - Google Analytics  */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-15514230-1"></script>
    <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-15514230-1');
        `}
      </script>  );
    </Helmet>
  );
}

SEO.propTypes = propTypes;
SEO.defaultProps = defaultProps;

export default SEO;
