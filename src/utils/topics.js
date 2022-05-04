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

export const ICONS_MAP = new Map([
  [11, emptyOvalIcon],
  [12, emptyOvalIcon],
  [2, footballIcon],
  [13, politicsIcon],
  [14, artIcon],
  [15, datingIcon],
  [16, musicIcon],
  [17, moviesIcon],
  [19, foodIcon],
  [18, seriesIcon],
]);
