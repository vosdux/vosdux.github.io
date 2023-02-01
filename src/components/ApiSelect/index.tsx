import React, { useState, useEffect, FC } from 'react';
import { Select } from 'antd';
import get from 'lodash.get';
import debounce from 'lodash.debounce';
import { makeRequest } from '../../api/makeRequest';
import { useCallback } from 'react';

type Props = {
  url: string;
  path: string;
  valueField: string;
  lableField: string;
  serachFiled: string;
  value?: any;
  onChange?: () => void;
};

const DEBOUNCE_VALUE = 300;

export const ApiSelect: FC<Props> = ({ url, path, lableField, valueField, serachFiled, ...props }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetch = async (value: string) => {
    const { data } = await makeRequest.get(`/${url}`, { params: { offset: 0, limit: 10, [serachFiled]: value } });
    const elems = get(data, path);
    const options = elems.map((item) => ({ label: item[lableField], value: item[valueField] }));

    setOptions(options);
  };

  console.log(options, 'opts');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFetch = useCallback(debounce(fetch, DEBOUNCE_VALUE), []);

  return (
    <Select {...props} filterOption={false} showSearch onSearch={(value) => debouncedFetch(value)} options={options} />
  );
};
