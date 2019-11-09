import react from 'react';
import sectionContainer from '../components/SectionContainer';
import sectionHeader from '../components/SectionHeader';
import whiteBox from '../components/WhiteBox';

import dredmor0 from '../images/dredmor0.png'
import ce from "../images/ce1.png"
import finn0 from "../images/finn0.png"
import sc0 from "../images/sc0.png"


import { rhythm } from '../utils/typography';

const profileSection = () => {

  const projects = [
    {
      name: 'Dungeons of Dredmor',
      description:
        "A dungeon game with lutefisk. This project was the foundation for the game studio Gaslamp Games, worked on in basements and couches on evenings and weekends, while everyone in the team was busy with their full-time job or school.",
      webpageURL: "https://dungeonsofdredmor.com/",
      imgPath: dredmor0
    },
    {
      name: "Clockwork Empires",
      description: "A game about the perils of the unknown, The Sims crossed with Settlers, and H.P. Lovecraft. This project was a labor of love, but was ultimately overly ambitious and suffered from scope creep and unwieldy systems.",
      imgPath: ce
    },
    {
      name: "Digital Self-Service",
      description: "My first \"startup\", Finn AI\'s Digital Self-Service assistant helps users with common banking problems that can\'t be resolved easily via mobile or web. The product saved end users time, and both reduced operational costs and built trust for financial institutions.",
      webpageURL: "https://www.finn.ai",
      imgPath: finn0
    },
    {
      name: "Untitled Space Game",
      description: "Still very much WIP, I\'m experimenting with a couple of things. First, the weirdness of actual orbital mechanics. And second, the relaxing feeling of watching complex simulations at work.",
      imgPath: sc0
    }
  ];

  const styles = {
    grid: {
      display: "grid",
      gridGap: rhythm(2),
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 350px))",
      justifyContent: "center",
      margin: "auto",
      maxWidth: 1200
    },
    whiteBox: {
      padding: rhythm(1)
    },
    itemImage: {
      border: "1px solid #aaa",
      objectFit: "cover",
      height: "160px",
      width: "100%",
      filter: "brightness(95%) grayscale(30%)"
    },
    itemTitle: {
      color: "#262626",
      display: "block",
      fontWeight: "bold",
      margin: "1rem 0",
      textDecoration: "none"
    },
    description: {
      fontSize: "0.8rem",
      marginBottom: "0.8rem"
    },
    externalLink: {
      color: "#999",
      fontSize: "0.8rem",
      textDecoration: "none",
      marginRight: "1rem",
      ':hover': {
        background: "#eee"
      }
    }
};

  return (
    <sectionContainer id="profile" colorNumber="2" skew skewReverse>
      <sectionHeader text="Things I've made" colorNumber="2" />

      <div css={styles.grid}>
        {projects.map(project => (
          <whiteBox key={project.name} css={styles.whiteBox}>
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
              
            </a>

            <p css={styles.description}>{project.description}</p>


            {project.blogPath && (
              <window.Link
                to={project.blogPath}
                target="_blank"
                css={styles.externalLink}
              >
                関連ブログ
              </window.Link>
            )}

          </whiteBox>
        ))}
      </div>

    </sectionContainer>
  );
};

export default profileSection;
