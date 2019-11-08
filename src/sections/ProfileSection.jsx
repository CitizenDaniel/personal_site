import React from 'react';
import AgeCalculator from '../components/AgeCalculator';
import Hr from '../components/Hr';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';

import dredmor0 from '../images/dredmor0.jpg'


import { rhythm } from '../utils/typography';

const ProfileSection = () => {

  const projects = [
    {
      name: 'Dungeons of Dredmor',
      description:
        'A dungeon game with lutefisk.',
      webpageURL: 'https://dungeonsofdredmor.com/',
      imgPath: dredmor0,
    },
    {
      name: 'Clockwork Empires',
      description: 'A game of hubris.',
      imgPath: dredmor0,
    },
    {
      name: 'Digital Self-Service',
      description: 'A bot that helps people.',
      webpageURL: 'https://www.finn.ai',
      imgPath: dredmor0,
    },
  ];

  const styles = {
    container: {
      display: 'grid',
      gridGap: rhythm(2),
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      justifyContent: 'center',
      margin: 'auto',
      maxWidth: 1200,
    },
    link: {
      color: '#262626',
    },
    whiteBox: {
      height: 'min-content',
      padding: rhythm(1),
      paddingTop: 0,
    },
    whiteBoxKeireki: {
      gridRowStart: 'span 2',
    },
    h3: {
      marginTop: rhythm(2),
      marginBottom: rhythm(1.5),
    },
    gaiyouPictureContainer: {
      marginBottom: rhythm(1.5),
      textAlign: 'center',
    },
    gaiyouPicture: {
      width: '200px',
      borderRadius: '50%',
    },
    gaiyouListItem: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: rhythm(1),
    },
    gaiyouItemName: {
      flex: 2,
      textAlign: 'right',
      marginRight: '1rem',
    },
    gaiyouItemContent: {
      flex: 3,
    },
    keirekiGray: {
      color: '#999999',
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



};

  return (
    <SectionContainer id="profile" colorNumber="2" skew skewReverse>
      <SectionHeader text="Things I've made" colorNumber="2" />

      <div css={styles.grid}>
        {projects.map(project => (
          <WhiteBox key={project.name} css={styles.whiteBox}>
            <a
              href={project.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.imgPath}
                css={styles.itemImage}
                alt={project.name}
              />
            </a>

            <a
              href={project.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
              css={styles.itemTitle}
            >
              {project.name}
              <IconExtLink />
            </a>

            <p css={styles.description}>{project.description}</p>


            {project.blogPath && (
              <Link
                to={project.blogPath}
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

export default ProfileSection;
