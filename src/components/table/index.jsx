import { Table } from 'antd';
import { useState } from 'react';
import useUniqueId from '../../hooks/useId';

const columns = [
  {
    title: 'Mahsulot nomi',
    dataIndex: 'productName',
  },
  {
    title: 'Mahsulot haqida',
    dataIndex: 'description',
  },
  {
    title: 'Yetkazib beruvchi',
    dataIndex: 'supplier',
  },
];

const TableComponent = ({ data }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </>
  );
};
export default TableComponent;
