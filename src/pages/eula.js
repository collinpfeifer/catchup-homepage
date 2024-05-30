import * as React from "react"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/eula.module.css"

const EULAPage = () => {
  return (
    <div
      className="uk-flex uk-flex-middle uk-flex-column uk-flex-center uk-container uk-container-small"
      style={{ marginBottom: "10rem" }}
    >
      <StaticImage src="../images/catch_up_logo.png" className={styles.self} />
      <h1
        className={styles.poetsen}
        style={{
          textAlign: "center",
        }}
      >
        MOBILE APPLICATION END USER LICENSE AGREEMENT
      </h1>
      <h3 className={styles.poetsen}>Effective Date: June 1st, 2024</h3>
      <p className={styles.poetsen}>
        This End User License Agreement ("Agreement") is a legal agreement
        between you ("User" or "you") and Catch-Up Inc.("Company," "we," "us,"
        or "our") for the use of Catch-Up ("App"). By downloading, installing,
        or using the App, you agree to be bound by the terms of this Agreement.
        If you do not agree to these terms, do not download, install, or use the
        App.
      </p>
      <h3 className={styles.poetsen}>1. License Grant</h3>
      <p className={styles.poetsen}>
        The Company grants you a limited, non-exclusive, non-transferable,
        revocable license to use the App for personal, non-commercial purposes
        in accordance with the terms of this Agreement.
      </p>
      <h3 className={styles.poetsen}>2. Compliance with Apple's Guidelines</h3>
      <p className={styles.poetsen}>
        This Agreement is intended to be compliant with Apple's guidelines and
        policies. In the event of any conflict between this Agreement and
        Apple's guidelines, Apple's guidelines will prevail.
      </p>
      <h3 className={styles.poetsen}>3. Prohibited Uses</h3>
      <p className={styles.poetsen}>
        You agree not to use the App in any way that:
        <ul>
          <li>Violates any applicable laws or regulations.</li>
          <li>
            Infringes the rights of any third party, including but not limited
            to intellectual property rights.
          </li>
          <li>Distributes viruses, malware, or any other harmful code.</li>
          <li>Collects information about others without their consent.</li>
          <li>
            Engages in any activity that is abusive, harassing, threatening, or
            otherwise objectionable.
          </li>
        </ul>
      </p>
      <h3 className={styles.poetsen}>
        4. No Tolerance for Objectionable Content and Abusive Users
      </h3>
      <p className={styles.poetsen}>
        We have a zero-tolerance policy for objectionable content and abusive
        users. Any content that is deemed, at our sole discretion, to be
        abusive, harassing, threatening, or otherwise objectionable will result
        in the immediate termination of your license to use the App and may lead
        to further legal action. You agree not to post, upload, or distribute
        any such content through the App.
      </p>
      <h3 className={styles.poetsen}>5. Termination</h3>
      <p className={styles.poetsen}>
        This Agreement is effective until terminated. Your rights under this
        Agreement will terminate automatically without notice if you fail to
        comply with any term(s) of this Agreement. Upon termination, you must
        cease all use of the App and destroy all copies, full or partial, of the
        App.
      </p>
      <h3 className={styles.poetsen}>6. Disclaimer of Warranties</h3>
      <p className={styles.poetsen}>
        The App is provided "as is" and "as available" without any warranties of
        any kind, either express or implied, including but not limited to
        implied warranties of merchantability, fitness for a particular purpose,
        and non-infringement.
      </p>
      <h3 className={styles.poetsen}>7. Limitation of Liability</h3>
      <p className={styles.poetsen}>
        To the maximum extent permitted by law, in no event shall the Company be
        liable for any indirect, incidental, special, consequential, or punitive
        damages, or any damages whatsoever arising out of or related to your use
        or inability to use the App.
      </p>
      <h3 className={styles.poetsen}>8. Governing Law</h3>
      <p className={styles.poetsen}>
        This Agreement shall be governed by and construed in accordance with the
        laws of the State of Indiana, United States of America, without regard
        to its conflict of law principles.
      </p>
      <h3 className={styles.poetsen}>9. Changes to this Agreement</h3>
      <p className={styles.poetsen}>
        We reserve the right to modify this Agreement at any time. Your
        continued use of the App following the posting of changes will mean that
        you accept and agree to the changes.
      </p>
      <h3 className={styles.poetsen}>10. Contact Information</h3>
      <p className={styles.poetsen}>
        If you have any questions about this Agreement, please contact us at:
        Catch-Up Inc. 12807 Rotterdam Road, Fishers, Indiana, 46037
        collinpfeifer@icloud.com (317) 995-5114
      </p>
      <p className={styles.poetsen}>
        By clicking "Agree" or by downloading, installing, or using the App, you
        acknowledge that you have read, understood, and agree to be bound by the
        terms of this Agreement.
      </p>
    </div>
  )
}

export const Head = () => <Seo title="EULA" />

export default EULAPage
