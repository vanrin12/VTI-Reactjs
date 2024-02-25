import { TheadType } from './TableDataTypes';

interface TableHeadProps {
  thItems: Array<TheadType>;
}
const TableHead = ({ thItems }: TableHeadProps) => {
  return (
    <thead>
      <tr>
        {thItems.map((item) => (
          <th key={item.id}>{item.name}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
