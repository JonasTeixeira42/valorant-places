import { useRouter } from 'next/dist/client/router';
import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';

import CustomMarker from 'components/CustomMarker';

import * as S from './styles';

type Place = {
  id: string;
  name: string;
  slug: string;
  avatar: {
    url: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
};

export type MapProps = {
  places?: Place[];
};

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID;
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID;

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
};

const Map = ({ places }: MapProps) => {
  const router = useRouter();

  return (
    <S.MapWrapper>
      <MapContainer
        center={[0, 0]}
        zoom={3}
        minZoom={3}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
        style={{ height: '100%', width: '100%' }}
      >
        <MapConsumer>
          {(map) => {
            const width =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth;

            if (width < 768) {
              map.setMinZoom(2);
            }

            return null;
          }}
        </MapConsumer>
        <CustomTileLayer />
        {places?.map(({ id, slug, name, location, avatar }) => {
          const { latitude, longitude } = location;

          const icon = L.divIcon({
            className: 'custom-icon',
            iconAnchor: [20, 40],
            html: ReactDOMServer.renderToString(
              <CustomMarker avatar={avatar.url} />
            )
          });

          return (
            <Marker
              icon={icon}
              key={`place-${id}`}
              position={[latitude, longitude]}
              title={name}
              eventHandlers={{
                click: () => {
                  router.push(`/place/${slug}`);
                }
              }}
            />
          );
        })}
      </MapContainer>
    </S.MapWrapper>
  );
};

export default Map;
