import * as React from "react"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/privacy-policy.module.css"

const PrivacyPolicyPage = () => {
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
        PRIVACY POLICY
      </h1>
      <h3 className={styles.poetsen}>Effective Date: June 1st, 2024</h3>
      <p className={styles.poetsen}>
        Catch-Up Inc. ("Company," "we," "us," or "our") operates the Catch-Up
        ("App"). This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you use our App. By using the App, you
        agree to the terms of this Privacy Policy. If you do not agree with the
        terms of this Privacy Policy, please do not use the App.
      </p>
      <h3 className={styles.poetsen}>1. Information We Collect</h3>
      <p className={styles.poetsen}>
        We may collect information about you in a variety of ways. The
        information we may collect via the App includes:{" "}
        <ul>
          <li>
            Personal Data: Personally identifiable information, such as your
            name, email address, and any other information you voluntarily give
            to us when you register with the App or when you choose to
            participate in various activities related to the App.
          </li>
          <li>
            Usage Data: Information automatically collected when you access the
            App, such as your IP address, browser type, operating system, access
            times, and the pages you have viewed directly before and after
            accessing the App.
          </li>
          <li>
            Mobile Device Data: Information about your mobile device, including
            device ID, model, manufacturer, and information about the location
            of your device, if you access the App from a mobile device.{" "}
          </li>
          <li>
            App Data: Information related to your interactions with the App,
            such as preferences, usage patterns, and other App-related data.
          </li>
        </ul>
      </p>
      <h3 className={styles.poetsen}>2. Use of your information</h3>
      <p className={styles.poetsen}>
        We use the information we collect in the following ways:
        <ul>
          <li>To provide, operate, maintain, and improve the App.</li>
          <li>To understand and analyze how you use the App.</li>
          <li>
            To develop new products, services, features, and functionality.
          </li>
          <li>
            To communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the App, and for marketing
            and promotional purposes.
          </li>
          <li>
            To process your transactions and send you related information,
            including purchase confirmations and invoices.
          </li>
          <li>
            To prevent fraudulent transactions, monitor against theft, and
            protect against criminal activity.
          </li>
          <li>
            To comply with legal obligations and resolve any disputes we may
            have with you or other users.
          </li>
        </ul>
      </p>
      <h3 className={styles.poetsen}>3. Disclosure of Your Information</h3>
      <p className={styles.poetsen}>
        We may share information we have collected about you in certain
        situations. Your information may be disclosed as follows:
        <ul>
          <li>
            By Law or to Protect Rights: If we believe the release of
            information about you is necessary to respond to legal process, to
            investigate or remedy potential violations of our policies, or to
            protect the rights, property, and safety of others, we may share
            your information as permitted or required by any applicable law,
            rule, or regulation.
          </li>
          <li>
            Third-Party Service Providers: We may share your information with
            third parties that perform services for us or on our behalf,
            including payment processing, data analysis, email delivery, hosting
            services, customer service, and marketing assistance.
          </li>
          <li>
            Business Transfers: We may share or transfer your information in
            connection with, or during negotiations of, any merger, sale of
            company assets, financing, or acquisition of all or a portion of our
            business to another company.
          </li>
          <li>
            With Your Consent: We may disclose your personal information for any
            other purpose with your consent.
          </li>
        </ul>
      </p>
      <h3 className={styles.poetsen}>4. Data Security</h3>
      <p className={styles.poetsen}>
        We use administrative, technical, and physical security measures to help
        protect your personal information. While we have taken reasonable steps
        to secure the personal information you provide to us, please be aware
        that despite our efforts, no security measures are perfect or
        impenetrable, and no method of data transmission can be guaranteed
        against any interception or other type of misuse.
      </p>
      <h3 className={styles.poetsen}>5. Your Privacy Rights</h3>
      <p className={styles.poetsen}>
        Depending on your location, you may have the following rights regarding
        your personal information:
        <ul>
          <li>
            The right to access – You have the right to request copies of your
            personal information.
          </li>
          <li>
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate or complete
            information you believe is incomplete.
          </li>
          <li>
            The right to erasure – You have the right to request that we erase
            your personal information, under certain conditions.
          </li>
          <li>
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal information, under
            certain conditions.
          </li>
          <li>
            The right to object to processing – You have the right to object to
            our processing of your personal information, under certain
            conditions.
          </li>
          <li>
            The right to data portability – You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
          </li>
        </ul>
        To exercise these rights, please contact us at: collinpfeifer@icloud.com
        or (317) 995-5114
      </p>
      <h3 className={styles.poetsen}>6. Changes to This Privacy Policy</h3>
      <p className={styles.poetsen}>
        We may update this Privacy Policy from time to time in order to reflect
        changes to our practices or for other operational, legal, or regulatory
        reasons. We will notify you of any changes by posting the new Privacy
        Policy on this page. You are advised to review this Privacy Policy
        periodically for any changes. Changes to this Privacy Policy are
        effective when they are posted on this page.
      </p>
      <h3 className={styles.poetsen}>7. Contact Us</h3>
      <p className={styles.poetsen}>
        If you have any questions about this Privacy Policy, please contact us
        at: Catch-Up Inc. 12807 Rotterdam Road, Fishers, Indiana, 46037
        collinpfeifer@icloud.com (317) 995-5114
      </p>
      <p className={styles.poetsen}>
        By using the App, you acknowledge that you have read and understood this
        Privacy Policy and agree to its terms.
      </p>
    </div>
  )
}

export const Head = () => <Seo title="Privacy Policy" />

export default PrivacyPolicyPage
