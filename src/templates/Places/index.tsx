import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import { NextSeo } from 'next-seo';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';

type ImageProps = {
  url: string;
  height: number;
  width: number;
};

export type PlaceTemplateProps = {
  place: {
    slug: string;
    name: string;
    line: string;
    description?: {
      html: string;
      text: string;
    };
    gallery: ImageProps[];
  };
};

export default function PlaceTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <>
      <NextSeo
        title={`${place.name} - Valorant Places`}
        description={
          place.description?.text ||
          "a website to talk about the places that valorant's characters came from"
        }
        canonical="https://valorant-place.jonasteixeira.com.br"
        openGraph={{
          url: 'https://valorant-place.jonasteixeira.com.br',
          title: 'Valorant Places',
          description:
            place.description?.text ||
            "a website to talk about the places that valorant's characters came from",
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={index}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
                objectFit={'cover'}
              />
            ))}
          </S.Gallery>

          <S.Heading>{place.name}</S.Heading>
          <S.Quotation>{place.line}</S.Quotation>

          <S.Body
            dangerouslySetInnerHTML={{
              __html: place.description?.html || 'null'
            }}
          />
        </S.Container>
      </S.Wrapper>
    </>
  );
}
