import PropTypes from 'prop-types';
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import svgForm from '../icons/footer-form.svg';
import svgGithub from '../icons/footer-github-dark.svg';
import svgMail from '../icons/footer-mail-dark.svg';
import svgPin from '../icons/footer-pin.svg';
import linkedin from '../icons/linkedin.svg';
import { rhythm } from '../utils/typography';

const FooterSection = props => {
  const footerInfo = [

    {
      imgPath: svgMail,
      description: 'dan@danjacobsen.com',
      link: 'mailto:dan@danjacobsen.com',
    },
    {
      imgPath: linkedin,
      description: 'linkedin.com/danjacobsen',
      link: 'https://www.linkedin.com/in/danjacobsen01/'
    },
    {
      imgPath: svgGithub,
      description: 'github.com/CitizenDaniel',
      link: 'https://github.com/CitizenDaniel',
    },
  ];

  const styles = {
    container: {
      display: 'grid',
      gridColumnGap: rhythm(1),
      gridTemplateColumns: '250px',
      justifyContent: 'center',
      margin: 'auto',
    },
    link: {
      color: '#262626',
      textDecoration: 'none',
    },
    ItemContainer: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      height: rhythm(5 / 2),
    },
    image: {
      width: '30px',
      height: '30px',
    },
    description: {
      color: '#262626',
      marginBottom: 0,
      paddingLeft: rhythm(1 / 2),
    },
  };

  return (
    <SectionContainer id="contact" colorNumber="1" >
      <SectionHeader text="Contact" colorNumber="1" />

      <div css={styles.container}>
        {footerInfo.map(info => (
          <a
            href={info.link || null}
            onClick={info.onClick || null}
            css={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            key={info.description}
          >
            <div css={styles.ItemContainer}>
              <img src={info.imgPath} css={styles.image} alt="" />
              <p css={styles.description}>{info.description}</p>
            </div>
          </a>
        ))}
      </div>
    </SectionContainer>
  );
};

FooterSection.propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

export default FooterSection;
