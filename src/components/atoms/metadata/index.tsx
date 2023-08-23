import { NextSeo } from 'next-seo';
import Head from 'next/head';

type Props = {
  title?: string;
  subtitle?: string;
  description?: string;
};

const content = {
  description:
    'Save time by building fast with Boldo Template.',
  title: 'Boldo',
  subtitle: 'Impact beyond borders',
};

export function Metadata(props: Props) {
  const {
    description = content.description,
    title = content.title,
    subtitle = content.subtitle,
  } = props;

  return (
    <>
      <NextSeo
        title={`${title} | ${subtitle}`}
        description={description}
        noindex
        nofollow
      />

      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
    </>
  );
}
