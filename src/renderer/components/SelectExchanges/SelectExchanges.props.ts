import React from 'react';

export interface SelectExchangesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  // eslint-disable-next-line @typescript-eslint/ban-types
  chooseExchange: Function;
  activeAccount?: {
    id: number;
    name: string;
  };
}
