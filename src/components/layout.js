/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import * as styles from "./layout.module.css"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer className={styles.footer}>
          <ul>
            <li className={styles.item}>
              <Link className={styles.link} href="/support">
                Support
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/eula">
                EULA
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/terms-and-conditions">
                Terms and Conditions
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default Layout
