import { useRouter } from 'next/dist/client/router';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import Image from 'next/image';

import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';

type ImageProps = {
  url: string;
  height: string;
  width: string;
};

export type PlaceTemplateProps = {
  place: {
    slug: string;
    name: string;
    description?: {
      html: string;
    };
    gallery: ImageProps[];
  };
};

export default function PlaceTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{
              __html: place.description?.html || 'null'
            }}
          />

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
        </S.Container>
      </S.Wrapper>
    </>
  );
}
