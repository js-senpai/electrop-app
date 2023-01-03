import { useState } from 'react';
import { Button, Select } from 'antd';
import styled from 'styled-components';
import { SelectExchangesProps } from './SelectExchanges.props';

const ExchangeSelect = styled(Select)({
  marginBottom: '16px',
  display: 'block',
  '& .ant-select-selector': {
    color: '#fff !important',
    backgroundColor: '#212226 !important',
  },
});

const SubmitButton = styled(Button)({
  '&:disabled': {
    background: '#1677ff !important',
    color: '#fff !important',
    borderColor: '#1677ff !important',
    opacity: 0.9,
  },
});

const SelectExchanges = ({
  chooseExchange,
  activeAccount,
}: SelectExchangesProps): JSX.Element => {
  const [exchanges, setExchanges] = useState([]);
  const [selectedExchange, setSelectedExchange] = useState('');
  const handleChange = (value: string) => {
    setSelectedExchange(value);
  };
  return (
    <>
      <ExchangeSelect
        disabled={!activeAccount}
        options={exchanges}
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        onChange={handleChange}
      />
      <SubmitButton
        type="primary"
        disabled={!activeAccount}
        onClick={() => chooseExchange(selectedExchange)}
        style={{ width: '100%' }}
      >
        Подтвердить
      </SubmitButton>
    </>
  );
};

export default SelectExchanges;
