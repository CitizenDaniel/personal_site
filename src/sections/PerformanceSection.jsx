import Link from 'gatsby-link';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import jissekiCompare from '../images/jisseki-compare.png';
import jissekiNote from '../images/jisseki-note.png';
import jissekiPict from '../images/jisseki-pict.png';
import jissekiRebalancer from '../images/jisseki-rebalancer.jpg';
import jissekiTravelrPng from '../images/jisseki-travelr.png';
import jissekiYuuniJpg from '../images/jisseki-yuuni.jpg';
import { rhythm } from '../utils/typography';

const PerformanceSection = () => {
  const performances = [
    {
      name: 'react-compare-image',
      description:
        'スライダを使って画像を比較するためのReactコンポーネントです。世界中で利用されています。',
      webpageURL: 'https://www.npmjs.com/package/react-compare-image',
      githubURL: 'https://github.com/junkboy0315/react-compare-image',
      imgPath: jissekiCompare,
    },
    {
      name: 'Pairwise Pict Online',
      description: 'ペアワイズ法に基づきテストケースを生成できるサービスです。',
      webpageURL: 'https://pairwise.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/pairwise-pict-online',
      imgPath: jissekiPict,
    },
    {
      name: 'Portfolio Rebalancer',
      description:
        'ポートフォリオのリバランスを簡単に行えるようにすることで、資産運用を支援するツールです。',
      webpageURL: 'http://rebalancer.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/rebalancer',
      imgPath: jissekiRebalancer,
    },
    {
      name: 'Travelr',
      description:
        '古い写真と新しい写真を比較して楽しむ写真投稿サービスです。デモ用に作成したものです。',
        { name: 'GCP Cloud SQL', description: 'データベース' },
      ],
      webpageURL: 'http://travelr.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/travelr',
      blogPath: '/blog/2018-07-31-デモシステムを作成しました/',
      imgPath: jissekiTravelrPng,
    },
    {
      name: 'Yuuniworks Notes',
      description:
        'VuePressで作成したドキュメントサイトです。Algoliaによる全文検索を実装しています。',
      webpageURL: 'https://note.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/markdown-notes',
      imgPath: jissekiNote,
    },
    {
      name: 'Yuuniworks Web',
      description:
        '当サイトです。静的サイトジェネレータのGatsbyを使って作成しています。',
      webpageURL: 'https://www.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/yuuni-web',
      blogPath: '/blog/2018-04-09-jamstackなwebサイトの作成/',
      imgPath: jissekiYuuniJpg,
    },
  ];

  const styles = {
    grid: {
      display: 'grid',
      gridGap: rhythm(2),
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      justifyContent: 'center',
      margin: 'auto',
      maxWidth: 1200,
    },
    whiteBox: {
      padding: rhythm(1),
    },
    itemImage: {
      border: '1px solid #aaa',
      objectFit: 'cover',
      height: '160px',
      width: '100%',
      filter: 'brightness(95%) grayscale(30%)',
    },
    itemTitle: {
      color: '#262626',
      display: 'block',
      fontWeight: 'bold',
      margin: '1rem 0',
      textDecoration: 'none',
    },
    description: {
      fontSize: '0.8rem',
      marginBottom: '0.8rem',
    },
    externalLink: {
      color: '#999',
      fontSize: '0.8rem',
      textDecoration: 'none',
      marginRight: '1rem',
      ':hover': {
        background: '#eee',
      },
    },
  };

  return (
    <SectionContainer id="performance">
      <SectionHeader text="Media" colorNumber="1" />

      {/* グリッド始点 */}
      <div css={styles.grid}>
        {performances.map(performance => (
          <WhiteBox key={performance.name} css={styles.whiteBox}>
            <a
              href={performance.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={performance.imgPath}
                css={styles.itemImage}
                alt={performance.name}
              />
            </a>

            <a
              href={performance.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
              css={styles.itemTitle}
            >
              {performance.name}
              <IconExtLink />
            </a>

            <p css={styles.description}>{performance.description}</p>

            {performance.githubURL ? (
              <a
                href={performance.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                css={styles.externalLink}
              >
                ソースコード
              </a>
            ) : (
              <div style={{ color: 'transparent' }}>_</div>
            )}

            {performance.blogPath && (
              <Link
                to={performance.blogPath}
                target="_blank"
                css={styles.externalLink}
              >
                関連ブログ
              </Link>
            )}

          </WhiteBox>
        ))}
      </div>
      {/* グリッド終点 */}
    </SectionContainer>
  );
};

export default PerformanceSection;
