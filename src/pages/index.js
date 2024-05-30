import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={styles.circle1}></div>
    <div className={styles.circle2}></div>
    <div className={styles.circle6}></div>
    <div className={styles.circle7}></div>
    <div className={styles.circle8}></div>
    <div className="uk-flex uk-flex-center uk-flex-middle uk-flex-column">
      <StaticImage src="../images/catch_up_logo.png" className={styles.self} />
      <div>
        <a
          className="uk-button uk-button-default"
          href="/"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "25px",
            fontSize: "1.25rem",
            fontWeight: "bold",
          }}
        >
          Download on the App Store{" "}
          <span style={{ fontSize: "1.5rem" }}></span>
        </a>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
