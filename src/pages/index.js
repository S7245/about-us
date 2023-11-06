import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          联系我们
        </Heading>
        <p className="hero__subtitle">
        平台没有联系方式的入口，添加微信"18816820401"，感兴趣细聊。
        </p>
      </div>
    </header>
  );
}

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
    </Layout>
  );
}
