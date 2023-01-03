import React, { useMemo, useState } from 'react';
import PagesTab from '../../components/PagesTab';
import PagesContent from '../../components/PagesContent';

const HomePage = (): JSX.Element => {
  const [tabs, setTabs] = useState([]);
  const [accountList, setAccountList] = useState([]);
  const activeTab = useMemo(
    () => tabs.find(({ active = false }) => active),
    [tabs]
  );
  const activeAccount = useMemo(
    () => accountList.find(({ active = false }) => active),
    [accountList]
  );
  const onChangeExchange = ({
    tabId,
    chosenExchange,
  }: {
    tabId: number;
    chosenExchange: string;
  }) => {
    setTabs(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      tabs.map(({ id, ...data }) => ({
        ...data,
        ...(tabId === id && {
          chosenExchange,
        }),
      }))
    );
  };
  return (
    <>
      <PagesTab tabs={tabs} setTabs={setTabs} />
      <PagesContent
        activeTab={activeTab}
        activeAccount={activeAccount}
        onChangeExchange={onChangeExchange}
      />
    </>
  );
};

export default HomePage;
