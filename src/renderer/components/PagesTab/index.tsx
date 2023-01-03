import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import {
  CloseOutlined,
  MoreOutlined,
  PlusOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { PagesTabProps } from './PagesTab.props';
import WindowSvgIcon from '../../../../assets/icons/window.svg';

const TabHeaderContainer = styled('div')({
  backgroundColor: '#121212',
  padding: '0 20px',
});

const TabHeader = styled('header')({
  display: 'grid',
  gridTemplateColumns: '11fr 2fr',
  gridGap: '15px',
});

const ButtonsContainer = styled('div')({
  padding: '11px',
  display: 'flex',
  alignItems: 'center',
});

const AddTabButton = styled(PlusOutlined)({
  color: '#fff',
  cursor: 'pointer',
  fontSize: '14px',
  padding: '5px',
});

const AddWindowButton = styled('img')({
  padding: '5px',
  cursor: 'pointer',
  display: 'block',
});

const ColumnContainer = styled('div')(
  ({ position = 'flex-start' }: { position?: string }) => ({
    display: 'flex',
    justifyContent: position,
    alignItems: 'center',
  })
);

const AccountListButton = styled(MoreOutlined)({
  color: '#fff',
  cursor: 'pointer',
  fontSize: '14px',
  padding: '5px',
});

const AddUserButton = styled(UsergroupAddOutlined)({
  color: '#fff',
  cursor: 'pointer',
  fontSize: '14px',
  padding: '5px',
});

const TabNavList = styled('nav')(({ columns = 1 }: { columns: number }) => ({
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: `repeat(${columns},1fr)`,
  gridGap: '8px',
  fontSize: '12px',
}));

const TabNavItem = styled('div')(({ active = false }: { active: boolean }) => ({
  padding: '5px 10px',
  maxWidth: '178px',
  display: 'grid',
  gridTemplateColumns: '11fr 1fr',
  alignItems: 'center',
  borderRadius: '6px',
  ...(active
    ? {
        backgroundColor: '#414141',
      }
    : {
        backgroundColor: '#25262B',
      }),
}));

const TabNavItemName = styled('div')(
  ({ active = false }: { active: boolean }) => ({
    ...({
      textAlign: 'center',
    } as const),
    ...({
      whiteSpace: 'nowrap',
    } as const),
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    ...(!active && {
      opacity: 0.2,
    }),
  })
);

const DeleteTabButton = styled(CloseOutlined)({
  color: '#fff',
  width: '10px',
  cursor: 'pointer',
});

const PagesTab = ({ tabs = [], setTabs }: PagesTabProps): JSX.Element => {
  const openNewWindow = () => {
    window.open('/');
  };
  const addTab = () => {
    setTabs([
      ...tabs.map((data) => ({
        ...data,
        active: false,
      })),
      {
        id: tabs.length + 1,
        name: 'Choose exchange',
        active: true,
        chosenExchange: null,
      },
    ]);
  };
  const deleteTab = (id: number) => {
    setTabs([...tabs.filter((item) => item.id !== id)]);
  };
  const totalColumns = useMemo(() => tabs.length, [tabs]);
  return (
    <>
      <TabHeaderContainer>
        <TabHeader>
          <ColumnContainer>
            <TabNavList columns={totalColumns}>
              {tabs.map(({ id, name, active = false }) => (
                <TabNavItem key={id} active={active}>
                  <TabNavItemName active={active}>{name}</TabNavItemName>
                  <DeleteTabButton onClick={() => deleteTab(id)} />
                </TabNavItem>
              ))}
            </TabNavList>
            <ButtonsContainer>
              <AddTabButton onClick={() => addTab()} />
              <AddWindowButton
                src={WindowSvgIcon}
                onClick={() => openNewWindow()}
              />
            </ButtonsContainer>
          </ColumnContainer>
          <ColumnContainer position="flex-end">
            <AddUserButton />
            <AccountListButton />
          </ColumnContainer>
        </TabHeader>
      </TabHeaderContainer>
    </>
  );
};

export default PagesTab;
