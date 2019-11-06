import React from 'react';
import { Link as LinkForScroll } from 'react-scroll';
import IconExtLink from '../components/IconExtLink';
import arrowSvg from '../icons/arrow.svg';
import logoSvg from '../icons/logo.svg';
import topImageJpg from '../images/top-image.jpg';

const TopSection = () => {
    const styles = {
      container: {
        alignItems: 'center',
        background: `#6292F1 url("${topImageJpg}") no-repeat center center`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        paddingTop: '40px',
      },
      logo: {
        width: '450px',
        maxWidth: '80%',
      },
      title: {
        color: '#fff',
        fontSize: '40px',
      },
    description: {
      color: '#fff',
      textAlign: 'center',
    },
    arrow: {
      bottom: 0,
      cursor: 'pointer',
      marginBottom: '1.875em',
      position: 'absolute',
      width: '45px',
      animation: 'downArrow 0.8s ease-out infinite',
    },
  };

  return (
    <section id="top" css={styles.container}>

      <div css={styles.title}>
        My name is Dan Jacobsen<br />
      </div>
      <div css={styles.description}>
      <a
          href="https://goo.gl/maps/XXiZ7qvMYNJNqfDp8"
          css={{ color: 'white' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          I live in Vancouver, BC<IconExtLink color="#fff" />
        </a><br />
        I make stuff.
      </div>
      <LinkForScroll
        to="gaiyou"
        smooth
        duration={150}
        offset={-50}
        css={styles.arrow}
      >
        <img src={arrowSvg} alt="Scroll down" />
      </LinkForScroll>
    </section>
  );
};

export default TopSection;
