import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { getSortedTutorialsData } from "../lib/tutorials";
import Link from "next/link";
import Date from "../components/date";
import { ClapButton, LikeButton, UpdownButton } from "@lyket/react";

export default function Home({ allPostsData, allTutorialsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I’m <strong>Jane</strong> 👉{" "}
          <span className={utilStyles.spanButton}>
            <LikeButton
              id="jane-doe-homepage"
              component={LikeButton.templates.Twitter}
            />
          </span>{" "}
          👈
        </p>
        <p>
          {" "}
          I’m a software engineer and a musician. This is my NEXT.js + Lyket
          blog, do not forget to hit that clap button!
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <div>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </div>
              <div className={utilStyles.lyketButtons}>
                <ClapButton id={id} namespace="my-blog" />
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Tutorials</h2>
        <ul className={utilStyles.list}>
          {allTutorialsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItemTutorials} key={id}>
              <div className={utilStyles.listItemButton}>
                <UpdownButton
                  id={id}
                  namespace="my-blog"
                  component={UpdownButton.templates.Reddit}
                />
              </div>
              <div>
                <Link href="/tutorials/[id]" as={`/tutorials/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allTutorialsData = getSortedTutorialsData();
  return {
    props: {
      allPostsData,
      allTutorialsData
    }
  };
}
