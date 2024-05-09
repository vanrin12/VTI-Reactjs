import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import TableData from '../../../components/TableData';
import { PRODUCT_TABLE_HEAD } from '../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../../../redux/product';
import Spinner from 'react-bootstrap/Spinner';

function Products() {
  const dispatch = useDispatch();
  const { products, isProcessing } = useSelector(
    (state: any) => state?.product,
  );
  useEffect(() => {
    dispatch(getProductList());
  }, []);

  const formatProductListData = (products: any) => {
    return products.map((p: any) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      infor: p.info,
      detail: p.detail,
      manufacturerName: p.manufacturerName,
      categoryName: p.categoryName,
    }));
  };
  return (
    <>
      {isProcessing ? (
        <Spinner animation="border" />
      ) : (
        <div className="container-fluid pt-4">
          <Button variant="primary">Add Product</Button>
          <TableData
            listTableHead={PRODUCT_TABLE_HEAD}
            listData={formatProductListData(products)}
          />
        </div>
      )}
    </>
  );
}

export default Products;
