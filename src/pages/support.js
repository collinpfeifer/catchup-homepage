import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/support.module.css"

const SupportPage = () => (
  <Layout>
    <div className="uk-flex uk-flex-center uk-flex-middle uk-flex-column uk-container uk-container-small">
      <StaticImage src="../images/catch_up_logo.png" className={styles.self} />
      <h1 className={styles.poetsen}>Support</h1>
      <h4 className={styles.poetsen} style={{ textAlign: "center" }}>
        Contact Collin at (317) 995-5114 and/or send an email to
        collinpfeifer@icloud.com with the subject "Catch-Up Support" and I will
        get back to you as soon as possible, thanks!
      </h4>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Support" />

export default SupportPage
