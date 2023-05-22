import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Introduction",
    img: "/img/idea.png",
    description: (
      <div>
        <p>
          The Fordeer Team is so honored to be founded with the mission of producing support tools
          for businesses all over the world.
          <br />
          Multiple helpful apps will be created and developed for your business and Shopify online
          store by our team.
        </p>
      </div>
    ),
  },
  {
    title: "Fordeer’s sharing",
    img: "/img/teamwork.png",
    description: (
      <>
        Our team believes that we have a thorough understanding of the needs and expectations of
        both merchants and their customers. <br />
        Our three years of experience as a partner and online store owner on the Shopify platform
        have contributed to this belief as well. In particular, our highly qualified programming
        engineers, with all their passion, are always ready to dedicate themselves to creating the
        most useful apps for customers. <br />
        Thus, we will highly appreciate it if you give us a hand and support us to boost the Fordeer
        app’s popularity as well as your brand’s fame to a new level.
      </>
    ),
  },
  {
    title: "Be loved by our customers",
    img: "/img/feedback.png",
    description: (
      <>
        <strong>The Fordeer Team</strong> also would like to express our gratitude to the loyal
        customers for loving our product, as well as the support of all users that install and put
        their trust in us.
        <br />
        We also appreciate all your reviews when you have experience with FIOP.
        <br />
        Your honest feedback encourages us and helps us to make improvements to our app!
        <br />
        Thank you so much and wish you all the best.
      </>
    ),
  },
];

function Feature({ title, img, description }: FeatureItem) {
  return (
    <div className={clsx("col col--12")}>
      <div className={`text--center ${styles.featureItem}`}>
        <img src={img} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className={`text--center ${styles.buttons}`}>
          <Link
            className="button button--info button--lg"
            to="https://link.fordeer.io/mIQ3TO"
          >
            START A FREE 14-DAY TRIAL
          </Link>
        </div>
      </div>
    </section>
  );
}
