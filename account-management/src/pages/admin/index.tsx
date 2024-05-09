import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import TableData from '../../components/TableData';
import { ACCOUNT_TABLE_HEAD } from '../../constants';
import { getAccountList } from '../../redux/account';
import { useDispatch, useSelector } from 'react-redux';

const Admin = () => {
  const dispatch = useDispatch();
  const { accounts } = useSelector((state: any) => state?.account);
  useEffect(() => {
    dispatch(getAccountList());
  }, []);

  console.log('accounts', accounts);

  return (
    <div className="container-fluid pt-4">
      <Button variant="primary">Add Product</Button>
      {accounts ? (
        <TableData listTableHead={ACCOUNT_TABLE_HEAD} listData={accounts} />
      ) : (
        'No data'
      )}
    </div>
  );
};

export default Admin;
