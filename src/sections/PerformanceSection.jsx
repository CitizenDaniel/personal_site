import Link from 'gatsby-link';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import dalio0 from '../images/dalio0.png';
import harari0 from '../images/harari0.jpg'
import duke0 from '../images/duke0.jpeg'
import { rhythm } from '../utils/typography';

const PerformanceSection = () => {
    const performances = [
      {
        name: 'Ray Dalio - The World Has Gone Mad and the System is Broken',
        description:
          'A current wealth fund manager and historic entrepreneur\'s take on the current state of the economy.',
        webpageURL: 'https://www.linkedin.com/pulse/world-has-gone-mad-system-broken-ray-dalio/',
        imgPath: dalio0,
      },
      {
        name: 'Yuval Noah Harari - Homo Deus',
        description: 'Dozens of fascinating questions about the future of liberalism.',
        webpageURL: 'https://www.ynharari.com/book/homo-deus/',
        imgPath: harari0,
      },
      {
        name: 'Annie Duke - Thinking in Bets',
        description: 'A really compelling read about making choices with imperfect information.',
        webpageURL: 'https://www.amazon.com/Thinking-Bets-Making-Smarter-Decisions/dp/0735216355',
        imgPath: duke0,
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
      <SectionHeader text="Reading" colorNumber="1" />

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
