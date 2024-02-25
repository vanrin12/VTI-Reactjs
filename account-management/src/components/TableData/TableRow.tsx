import Button from "react-bootstrap/Button";

interface TableRowProps {
  rowItem: Record<string, any>;
}
const TableRow = ({ rowItem }: TableRowProps) => {
  const renderTd = () => {
    return Object.keys(rowItem).map((item) => {
      return <td key={item}>{rowItem[item]}</td>;
    });
  };
  return (
    <>
      <tr>
        {renderTd()}
        <td>
          <Button variant="warning">Edit</Button>
        </td>
        <td>
          <Button variant="danger">Delete</Button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
