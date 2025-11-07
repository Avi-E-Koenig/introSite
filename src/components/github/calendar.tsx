import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { ThemeInput } from 'react-activity-calendar';

const explicitTheme: ThemeInput = {
  light: ['#212529', '#6f42c1', '#6829db', '#6610f2', '#5913db'],
  dark: ['#212529', '#6f42c1', '#6829db', '#6610f2', '#5913db'],
};

const Calendar = () => (
  <GitHubCalendar
    username="Avi-E-Koenig"
    blockSize={15}
    blockMargin={5}
    theme={explicitTheme}
    fontSize={16}
  />
);

export default Calendar;
