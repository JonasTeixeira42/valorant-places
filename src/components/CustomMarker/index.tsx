import * as S from './styles';

export type CustomMarkerProps = {
  avatar?: string;
};

const CustomMarker = ({ avatar }: CustomMarkerProps) => {
  return <S.Wrapper avatar={avatar} />;
};

export default CustomMarker;
