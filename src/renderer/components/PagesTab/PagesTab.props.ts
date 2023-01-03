import React from 'react';

export interface PagesTabProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: {
    id: number;
    name: string;
    active: boolean;
    chosenExchange: null | string;
  }[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  setTabs: Function;
}
