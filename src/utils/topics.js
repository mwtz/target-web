import { Icon } from 'leaflet';

import food from 'assets/food.svg';
import footballMap from 'assets/footballMap.svg';
import musicMap from 'assets/musicMap.svg';
import series from 'assets/series.svg';
import dating from 'assets/dating.svg';
import art from 'assets/art.svg';
import movies from 'assets/movies.svg';
import politics from 'assets/politics.svg';
import locationIcon from 'assets/locationIcon.svg';
import emptyOval from 'assets/emptyOval.svg';

export const userLocationIcon = new Icon({
  iconUrl: locationIcon,
  iconRetinaUrl: locationIcon,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

export const emptyOvalIcon = new Icon({
  iconUrl: emptyOval,
  iconRetinaUrl: emptyOval,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

export const foodIcon = new Icon({
  iconUrl: food,
  iconRetinaUrl: food,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

export const footballIcon = new Icon({
  iconUrl: footballMap,
  iconRetinaUrl: footballMap,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

export const musicIcon = new Icon({
  iconUrl: musicMap,
  iconRetinaUrl: musicMap,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

export const seriesIcon = new Icon({
  iconUrl: series,
  iconRetinaUrl: series,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

export const datingIcon = new Icon({
  iconUrl: dating,
  iconRetinaUrl: dating,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

export const artIcon = new Icon({
  iconUrl: art,
  iconRetinaUrl: art,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

export const moviesIcon = new Icon({
  iconUrl: movies,
  iconRetinaUrl: movies,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

export const politicsIcon = new Icon({
  iconUrl: politics,
  iconRetinaUrl: politics,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

export const ICONS_MAP = new Map();
ICONS_MAP.set(11, emptyOval);
ICONS_MAP.set(12, emptyOval);
ICONS_MAP.set(2, footballIcon);
ICONS_MAP.set(13, politicsIcon);
ICONS_MAP.set(14, artIcon);
ICONS_MAP.set(15, datingIcon);
ICONS_MAP.set(16, musicIcon);
ICONS_MAP.set(17, moviesIcon);
ICONS_MAP.set(19, foodIcon);
ICONS_MAP.set(18, seriesIcon);
