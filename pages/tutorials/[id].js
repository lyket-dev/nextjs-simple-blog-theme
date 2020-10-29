import Layout from "../../components/layout";
import { getAllTutorialIds, getTutorialData } from "../../lib/tutorials";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { UpdownButton } from "@lyket/react";

export default function Tutorial({ tutorialData }) {
  return (
    <Layout>
      <Head>
        <title>{tutorialData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{tutorialData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={tutorialData.date} />
        </div>
        <div className={utilStyles.lyketButtons}>
          <UpdownButton id={tutorialData.id} namespace="my-blog" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: tutorialData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllTutorialIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const tutorialData = await getTutorialData(params.id);
  return {
    props: {
      tutorialData
    }
  };
}
