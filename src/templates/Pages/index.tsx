import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';

const PageTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Home" />
    </LinkWrapper>

    <S.Heading>Street Fighters</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        assumenda provident enim, minus delectus perspiciatis sed ipsum
        perferendis, qui, excepturi et? Porro non pariatur quidem. Cum ad
        laborum quas odit, quis labore autem asperiores optio iusto. Dignissimos
        sunt itaque voluptatem, ullam atque excepturi possimus sapiente. Beatae
        recusandae tenetur velit temporibus.
      </p>
    </S.Body>
  </S.Content>
);

export default PageTemplate;
