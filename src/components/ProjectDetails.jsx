import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./ProjectDetails.module.scss";

const Section = ({ label, children }) => (
  <section className={styles.section}>
    <div className={styles.sectionGrid}>
      <div className={styles.sectionLabel}>{label}</div>
      <div className={styles.sectionBody}>{children}</div>
    </div>
  </section>
);

const ProjectDetails = ({
  accentColor,
  eyebrow,
  title,
  lede,
  link,
  role,
  platform,
  team,
  scope,
  stats,
  context,
  problem,
  discovery,
  decisionsIntro,
  decisionImageLayout,
  decisions,
  process,
  validation,
  finalDesign,
  impact,
  reflection,
}) => {
  return (
    <div className={styles.project} style={{ "--accent": accentColor }}>
      <Header />
      <main className={styles.hero}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lede}>{lede}</p>

        {link && (
          <a
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
            href={link}
          >
            Open in App Store
          </a>
        )}

        <div className={styles.metaRow}>
          <div>
            <span>Role</span>
            <p>{role}</p>
          </div>
          <div>
            <span>Platform</span>
            <p>{platform}</p>
          </div>
          <div>
            <span>Team</span>
            <p>{team}</p>
          </div>
          <div>
            <span>Scope</span>
            <p>{scope}</p>
          </div>
        </div>

        {stats?.length > 0 && (
          <div className={styles.statStrip}>
            {stats.map((stat, index) => (
              <div key={index}>
                <span className={styles.statNum}>{stat.num}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </main>

      {context?.length > 0 && (
        <Section label="Context">
          {context.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Section>
      )}

      {problem && (
        <Section label="The Problem">
          {problem.heading && <h2>{problem.heading}</h2>}
          {problem.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Section>
      )}

      {discovery && (
        <Section label="Discovery">
          {discovery.heading && <h2>{discovery.heading}</h2>}
          {discovery.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Section>
      )}

      {decisions?.length > 0 && (
        <Section label="Key Decisions">
          <h2>Four decisions that shaped the product, and what each one cost.</h2>
          {decisionsIntro && <p>{decisionsIntro}</p>}
          {decisions.map((decision, index) => (
            <div key={index} className={styles.decision}>
              <div className={styles.decisionContent}>
                <span className={styles.decisionNum}>{decision.number}</span>
                <h3>{decision.title}</h3>
                <p>{decision.description}</p>
                {decision.tradeoff && (
                  <p className={styles.tradeoff}>Trade-off: {decision.tradeoff}</p>
                )}
              </div>
              {decision.images?.length > 0 && (
                decisionImageLayout === "mobile" ? (
                  <div className={styles.decisionImagesMobile}>
                    {decision.images.map((img, i) => (
                      <div key={i} className={styles.decisionImageMobile}>
                        {img.src ? <img src={img.src} alt="" /> : <div className={styles.finalImagePlaceholder} />}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.decisionImages}>
                    {decision.images.map((img, i) => (
                      <div key={i} className={styles.decisionImageWeb}>
                        {img.src ? <img src={img.src} alt="" /> : <div className={styles.finalImagePlaceholder} />}
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          ))}
        </Section>
      )}

      {process && (
        <Section label={process.label || "User Flow"}>
          {process.heading && <h2>{process.heading}</h2>}
          {process.paragraphs?.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <div className={styles.flow}>
            {process.groups.map((group, index) => (
              <div key={index} className={styles.flowGroup}>
                {group.label && <span className={styles.flowGroupLabel}>{group.label}</span>}
                <div className={styles.flowSteps}>
                  {group.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className={styles.flowStepWrap}>
                      <span className={styles.flowStep}>{step}</span>
                      {stepIndex < group.steps.length - 1 && (
                        <span className={styles.flowArrow}>→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {validation?.length > 0 && (
        <Section label="Validation">
          {validation.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Section>
      )}

      {finalDesign && (
        <Section label="Final Design">
          {finalDesign.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          {finalDesign.images?.length > 0 && (() => {
            const grid = finalDesign.imageGrid;
            const containerClass =
              grid === "mobile"
                ? styles.finalImagesMobile
                : grid === "web"
                ? styles.finalImagesWeb
                : styles.finalImages;
            const itemClass =
              grid === "mobile"
                ? styles.finalImageMobile
                : grid === "web"
                ? styles.finalImageWeb
                : styles.finalImage;

            return (
              <div className={containerClass}>
                {finalDesign.images.map((image, index) => (
                  <div key={index} className={itemClass}>
                    {image.layers ? (
                      image.layers.map((layer, layerIndex) => (
                        <img key={layerIndex} src={layer.src} alt="" style={layer.style} />
                      ))
                    ) : image.src ? (
                      <img src={image.src} alt="" />
                    ) : (
                      <div className={styles.finalImagePlaceholder} />
                    )}
                  </div>
                ))}
              </div>
            );
          })()}
        </Section>
      )}

      {impact?.length > 0 && (
        <Section label="Impact">
          {impact.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Section>
      )}

      {reflection && (
        <Section label="Reflection">
          {reflection.heading && <h2>{reflection.heading}</h2>}
          {reflection.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Section>
      )}

      <Footer />
    </div>
  );
};

const paragraphsShape = PropTypes.arrayOf(PropTypes.string);

ProjectDetails.propTypes = {
  accentColor: PropTypes.string.isRequired,
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lede: PropTypes.string.isRequired,
  link: PropTypes.string,
  role: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  scope: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      num: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  context: paragraphsShape,
  problem: PropTypes.shape({
    heading: PropTypes.string,
    paragraphs: paragraphsShape.isRequired,
  }),
  discovery: PropTypes.shape({
    heading: PropTypes.string,
    paragraphs: paragraphsShape.isRequired,
  }),
  decisionsIntro: PropTypes.string,
  decisionImageLayout: PropTypes.oneOf(["mobile", "web"]),
  decisions: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tradeoff: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.shape({ src: PropTypes.string })),
    })
  ),
  process: PropTypes.shape({
    label: PropTypes.string,
    heading: PropTypes.string,
    paragraphs: paragraphsShape,
    groups: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        steps: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
  }),
  validation: paragraphsShape,
  finalDesign: PropTypes.shape({
    paragraphs: paragraphsShape.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        layers: PropTypes.arrayOf(
          PropTypes.shape({
            src: PropTypes.string.isRequired,
            style: PropTypes.object,
          })
        ),
      })
    ),
  }),
  impact: paragraphsShape,
  reflection: PropTypes.shape({
    heading: PropTypes.string,
    paragraphs: paragraphsShape.isRequired,
  }),
};

export default ProjectDetails;
