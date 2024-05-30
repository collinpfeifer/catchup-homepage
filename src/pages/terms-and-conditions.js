import * as React from "react"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/terms-and-conditions.module.css"

const TermsAndConditionsPage = () => {
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
        TERMS AND CONDITIONS
      </h1>
      <h3 className={styles.poetsen}>Effective Date: June 1st, 2024</h3>
      <p className={styles.poetsen}>
        Welcome to Catch-Up ("App"), operated by Catch-Up Inc. ("Company," "we,"
        "us," or "our"). By accessing or using our App, you agree to be bound by
        these Terms and Conditions ("Terms"). If you do not agree to these
        Terms, please do not use the App.
      </p>
      <h3 className={styles.poetsen}>1. Acceptance of Terms</h3>
      <p className={styles.poetsen}>
        By downloading, installing, and/or using the App, you agree to comply
        with and be bound by these Terms. If you do not agree with these Terms,
        you must not use the App.
      </p>
      <h3 className={styles.poetsen}>2. Changes to Terms</h3>
      <p className={styles.poetsen}>
        We reserve the right to modify these Terms at any time. We will notify
        you of any changes by posting the new Terms within the App. You are
        advised to review these Terms periodically for any changes. Your
        continued use of the App after any such changes constitutes your
        acceptance of the new Terms.
      </p>
      <h3 className={styles.poetsen}>3. Eligibility</h3>
      <p className={styles.poetsen}>
        You must be at least 13 years old to use the App. By using the App, you
        represent and warrant that you have the right, authority, and capacity
        to enter into these Terms and to abide by all of the terms and
        conditions set forth herein.
      </p>
      <h3 className={styles.poetsen}>4. License</h3>
      <p className={styles.poetsen}>
        We grant you a limited, non-exclusive, non-transferable, revocable
        license to access and use the App for personal, non-commercial use in
        accordance with these Terms.
      </p>
      <h3 className={styles.poetsen}>5. Prohibited Conduct</h3>
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
          <li>
            Attempts to gain unauthorized access to any portion of the App or
            any other systems or networks connected to the App.
          </li>
        </ul>
      </p>
      <h3 className={styles.poetsen}>6. User Content</h3>
      <p className={styles.poetsen}>
        You are solely responsible for any content you submit, post, or transmit
        via the App ("User Content"). You agree not to post any User Content
        that:
        <ul>
          <li>Is illegal, offensive, or otherwise objectionable.</li>
          <li>
            Violates any third party’s intellectual property or other rights.
          </li>
          <li>Contains viruses, malware, or other harmful software.</li>
        </ul>
        By posting User Content, you grant us a non-exclusive, worldwide,
        royalty-free, sublicensable, and transferable license to use, reproduce,
        distribute, prepare derivative works of, display, and perform such User
        Content in connection with the App and our business.
      </p>
      <h3 className={styles.poetsen}>7. Termination</h3>
      <p className={styles.poetsen}>
        We may terminate or suspend your access to the App immediately, without
        prior notice or liability, for any reason whatsoever, including, without
        limitation, if you breach these Terms. Upon termination, your right to
        use the App will immediately cease.
      </p>
      <h3 className={styles.poetsen}>8. Disclaimer of Warranties</h3>
      <p className={styles.poetsen}>
        The App is provided "as is" and "as available" without any warranties of
        any kind, either express or implied, including but not limited to
        implied warranties of merchantability, fitness for a particular purpose,
        and non-infringement.
      </p>
      <h3 className={styles.poetsen}>9. Limitation of Liability</h3>
      <p className={styles.poetsen}>
        To the maximum extent permitted by law, in no event shall the Company be
        liable for any indirect, incidental, special, consequential, or punitive
        damages, or any damages whatsoever, including but not limited to loss of
        profits, data, use, goodwill, or other intangible losses, resulting from
        (i) your use or inability to use the App; (ii) any unauthorized access
        to or use of our servers and/or any personal information stored therein;
        and (iii) any other matter related to the App.
      </p>
      <h3 className={styles.poetsen}>10. Governing Law</h3>
      <p className={styles.poetsen}>
        These Terms shall be governed by and construed in accordance with the
        laws of the State of Indiana, United States of America, without regard
        to its conflict of law principles.
      </p>
      <h3 className={styles.poetsen}>11. Contact Information</h3>
      <p className={styles.poetsen}>
        If you have any questions about these Terms, please contact us at:
        Catch-Up Inc. 12807 Rotterdam Road, Fishers, Indiana, 46037
        collinpfeifer@icloud.com (317) 995-5114
      </p>
      <p className={styles.poetsen}>
        By using the App, you acknowledge that you have read, understood, and
        agree to be bound by these Terms and Conditions.
      </p>
    </div>
  )
}

export const Head = () => <Seo title="Terms and Conditions" />

export default TermsAndConditionsPage
