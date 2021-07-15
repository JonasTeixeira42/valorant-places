import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

import LinkWrapper from 'components/LinkWrapper';
import { MapProps } from 'components/Map';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function Home({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Valorant Places"
        description="a website to talk about the places that valorant's characters came from"
        canonical="https://valorant-place.jonasteixeira.com.br"
        openGraph={{
          url: 'https://valorant-place.jonasteixeira.com.br',
          title: 'Valorant Places',
          description:
            "a website to talk about the places that valorant's characters came from",
          images: [
            {
              url: 'https://valorant-place.jonasteixeira.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Valorant Places'
            }
          ],
          site_name: 'Valorant Places'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
