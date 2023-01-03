import styled from 'styled-components';
import { PagesContentProps } from './PagesContent.props';
import Logo from '../Logo';
import SelectExchanges from '../SelectExchanges';

const ContentContainer = styled('main')({
  padding: '0 20px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '93vh',
  flexDirection: 'column',
});

const NotFoundTitle = styled('h1')({
  textAlign: 'center',
  color: '#fff',
});

const ContentWrapper = styled('div')({
  padding: '10px',
});

const LogoWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '103px',
});

const PagesContent = ({
  activeTab,
  onChangeExchange,
}: PagesContentProps): JSX.Element => {
  const onSetExchange = (value: string) => {
    onChangeExchange({ tabId: activeTab?.id, chosenExchange: value });
  };
  return (
    <ContentContainer>
      <ContentWrapper>
        {!activeTab ? (
          <NotFoundTitle>Please, add new tab</NotFoundTitle>
        ) : (
          <>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
            <SelectExchanges chooseExchange={onSetExchange} />
          </>
        )}
      </ContentWrapper>
    </ContentContainer>
  );
};

export default PagesContent;
