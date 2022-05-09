import football from 'assets/football.svg';
import travel from 'assets/travel.svg';
import music from 'assets/music.svg';
export const SUPPORTED_LANGUAGES = ['en'];
export const DEFAULT_LANGUAGE = 'en';

// REGEX
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// AUTH
export const AUTH_USER_KEY = 'user';

// GENDER OPTIONS
export const GENDER_OPTIONS = ['female', 'male', 'other'];

// TARGET TOPICS
export const TARGET_TOPICS = [
  { icon: football, label: 'Football' },
  { icon: travel, label: 'Travel' },
  { icon: music, label: 'Music' },
];

// TARGET LIMIT
export const TARGETS_LIMIT = 10;
