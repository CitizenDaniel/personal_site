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
import liu0 from "../images/liu0.jpg"
import cagan0 from "../images/cagan0.jpg"
import christensen0 from "../images/christensen0.jpg"

import { rhythm } from '../utils/typography';

const ReadingSection = () => {
  const reading = [
      {
        name: 'Clayton M. Christensen, Michael E. Raynor - The Innovator\'s Solution',
        description:
          'A thoroughly researched and cited reference on how and why some companies can make innovative products and others fail.',
        webpageURL: 'https://store.hbr.org/product/the-innovator-s-solution-creating-and-sustaining-successful-growth/16444',
        imgPath: christensen0,
      },
      {
        name: 'Ray Dalio - The World Has Gone Mad and the System is Broken',
        description:
          'A famous wealth fund manager and entrepreneur\'s take on the state of the economy prior to COVID-19.',
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
      {
        name: "Cixin Liu - The Three-body Problem",
        description: "A weird and deeply compelling story that plays with the nature of fictional and altered realities. This may be the first Chinese sci-fi story I have ever read, and I'm hooked.",
        webpageURL: "https://www.amazon.ca/dp/B00IQO403K/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
        imgPath: liu0
      },
      {
        name: "Marty Cagan - Inspired",
        description: "A benchmark for product managers, Cagan describes in detail his best-case model for teams making great products, as well as how other models fail.",
        webpageURL: "https://svpg.com/inspired-how-to-create-products-customers-love/",
        imgPath: cagan0
      },

    ];
    const music = [
      {
        name: 'Name',
        description: 'description',
        webpageURL: 'http://url.com',
      }
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
    <SectionContainer id="reading">
      <SectionHeader text="Good Reads" colorNumber="1" />

      <div css={styles.grid}>
        {reading.map(reading => (
          <WhiteBox key={reading.name} css={styles.whiteBox}>
            <a
              href={reading.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={reading.imgPath}
                css={styles.itemImage}
                alt={reading.name}
              />
            </a>

            <a
              href={reading.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
              css={styles.itemTitle}
            >
              {reading.name}
              <IconExtLink />
            </a>

            <p css={styles.description}>{reading.description}</p>


            {reading.blogPath && (
              <Link
                to={reading.blogPath}
                target="_blank"
                css={styles.externalLink}
              >
                関連ブログ
              </Link>
            )}

          </WhiteBox>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ReadingSection;
