import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import TableData from '../../components/TableData';
import { getAPI } from '../../helpers/API';
import { ACCOUNT_TABLE_HEAD } from '../../constants';

const Admin = () => {
  const [listDataTable, setListDataTable] = useState([]);

  useEffect(() => {
    const getListProduct = async () => {
      const res = await getAPI('accounts');
      setListDataTable(res.data);
    };
    getListProduct();
  }, []);

  console.log('listDataTable', listDataTable);

  return (
    <div className="container-fluid pt-4">
      <Button variant="primary">Add Product</Button>
      {listDataTable ? (
        <TableData
          listTableHead={ACCOUNT_TABLE_HEAD}
          listData={listDataTable}
        />
      ) : (
        'No data'
      )}
    </div>
  );
};

export default Admin;
