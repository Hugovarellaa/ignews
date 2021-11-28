import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import { RichText } from "prismic-dom";
import { getPrismic } from "../../services/prismic";
import Head from "next/head";
import styles from "./post.module.scss";

interface Post {
  post: {
    slug: string;
    title: string;
    content: string;
    updateAt: string;
  };
}

export default function Post({ post }: Post) {
  return (
    <>
      <Head>
        t<title>{post.title}</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updateAt}</time>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req });

  //Recuperando o slug e chamando o prismic e formatando os dados
  const { slug } = params;
  const prismic = getPrismic(req);
  const response = await prismic.getByUID("teste", String(slug), {});
  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updateAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: `/posts/preview/${post.slug}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      post,
    },
  };
};
