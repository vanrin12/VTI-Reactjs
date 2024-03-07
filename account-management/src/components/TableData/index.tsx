import Table from 'react-bootstrap/Table';
import TableHead from './TableHead';
import TableRow from './TableRow';
interface TableDataProps {
  listTableHead: Array<{
    id: number;
    name: string;
  }>;
  listData: Array<Record<string, any>>;
}
const TableData = ({ listTableHead, listData }: TableDataProps) => {
  return (
    <Table>
      <TableHead thItems={listTableHead} />
      <tbody>
        {listData?.map((data: Record<string, any>) => (
          <TableRow key={data.id} rowItem={data} />
        ))}
      </tbody>
    </Table>
  );
};

export default TableData;
