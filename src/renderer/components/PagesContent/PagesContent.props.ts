import React from 'react';
import { PagesTabProps } from '../PagesTab/PagesTab.props';

export interface PagesContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onChangeExchange: Function;
  activeTab?: PagesTabProps['tabs'][0];
  activeAccount?: {
    id: number;
    name: string;
  };
}
