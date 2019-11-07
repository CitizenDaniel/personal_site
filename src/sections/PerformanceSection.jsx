import link from "gatsby-link";
import react from "react";
import reactTooltip from "react-tooltip";
import iconExtLink from "../components/IconExtLink";
import sectionContainer from "../components/SectionContainer";
import sectionHeader from "../components/SectionHeader";
import whiteBox from "../components/WhiteBox";
import dalio0 from "../images/dalio0.png";
import harari0 from "../images/harari0.jpg"
import duke0 from "../images/duke0.jpeg"
import { rhythm } from "../utils/typography";

const performanceSection = () => {
    const readings = [
      {
        name: "Ray Dalio - The World Has Gone Mad and the System is Broken",
        description:
          "A current wealth fund manager and historic entrepreneur's take on the current state of the economy.",
        webpageURL: "https://www.linkedin.com/pulse/world-has-gone-mad-system-broken-ray-dalio/",
        imgPath: dalio0
      },
      {
        name: "Yuval Noah Harari - Homo Deus",
        description: "Dozens of fascinating questions about the future of liberalism.",
        webpageURL: "https://www.ynharari.com/book/homo-deus/",
        imgPath: harari0
      },
      {
        name: "Annie Duke - Thinking in Bets",
        description: "A really compelling read about making choices with imperfect information.",
        webpageURL: "https://www.amazon.com/Thinking-Bets-Making-Smarter-Decisions/dp/0735216355",
        imgPath: duke0
        },
    ];
    const music = [
      {
        name: "Name",
        description: "description",
        webpageURL: "http://url.com",
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
      border: '1px solid #aaa',
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
    },
  };

  return (
    <sectionContainer id="performance">
        
        <sectionHeader text="Reading" colorNumber="1" />

        <div css={styles.grid}>
          {readings.map(performance => (
            <whiteBox key={performance.name} css={styles.whiteBox}>
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
                <iconExtLink />
              </a>

              <p css={styles.description}>{performance.description}</p>


              {performance.blogPath && (
                <link
                  to={performance.blogPath}
                  target="_blank"
                  css={styles.externalLink}
                >
                  関連ブログ
                </link>
              )}

            </whiteBox>
          ))}
        </div>
        <br/>
        <sectionHeader text="Listening to" colorNumber="1" />

        <div css={styles.grid}>
            {music.map(performance => (
              <whiteBox key={performance.name} css={styles.whiteBox}>
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
                  <iconExtLink />
                </a>

                <p css={styles.description}>{performance.description}</p>


                {performance.blogPath && (
                  <link
                    to={performance.blogPath}
                    target="_blank"
                    css={styles.externalLink}
                  >
                    関連ブログ
                  </link>
                )}

              </whiteBox>
            ))}
        </div>
    </sectionContainer>
  );
};

export default performanceSection;
