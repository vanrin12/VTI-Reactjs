import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import TableData from '../../../components/TableData';
import { ACCOUNT_TABLE_HEAD } from '../../../constants';
import { getAccountList, createAccount } from '../../../redux/account';
import { useDispatch, useSelector } from 'react-redux';
import ModalCustom from '../../../components/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

const Account = () => {
  const dispatch = useDispatch();
  const { accounts, type, isProcessing } = useSelector(
    (state: any) => state?.account,
  );
  const [isShowAddAccount, setIsShowAddAccount] = useState(false);
  const [account, setAccount] = useState({
    email: '',
    username: '',
    password: '',
    mobile: '',
    address: '',
    avatarImageName: `Avatar${Math.random()}.jpg`,
    fullname: '',
  });

  useEffect(() => {
    dispatch(getAccountList());
  }, []);

  const handleInputChange = (event: any) => {
    const { value, name } = event.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  useEffect(() => {
    if (type === 'account/createAccountSuccess') {
      setIsShowAddAccount(false);
      dispatch(getAccountList());
    }
  }, [type]);

  const handleCreateAccount = () => {
    dispatch(createAccount(account as any));
  };

  return (
    <>
      {isProcessing ? (
        <Spinner animation="border" />
      ) : (
        <div className="container-fluid pt-4">
          <Button variant="primary" onClick={() => setIsShowAddAccount(true)}>
            Add Account
          </Button>
          {accounts && accounts.length > 0 ? (
            <TableData listTableHead={ACCOUNT_TABLE_HEAD} listData={accounts} />
          ) : (
            'No data'
          )}
          <ModalCustom
            show={isShowAddAccount}
            handleClose={() => setIsShowAddAccount(false)}
            modalTitle="Add Account"
            handleSubmit={handleCreateAccount}
          >
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Input email address"
                name="email"
                onChange={handleInputChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Input username"
                name="username"
                onChange={handleInputChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Input fullname"
                name="fullname"
                onChange={handleInputChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Input password"
                type="password"
                name="password"
                onChange={handleInputChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Input address"
                name="address"
                onChange={handleInputChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Input phone number"
                name="mobile"
                onChange={handleInputChange}
              />
            </InputGroup>
          </ModalCustom>
        </div>
      )}
    </>
  );
};

export default Account;
