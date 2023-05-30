const ExpenseTable = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td><button type="button" className="btn btn-dark">Dark</button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td><button type="button" className="btn btn-dark">Dark</button></td>
          </tr>
          <tr>
            <th scope="row">Total</th>
            <td colspan="2">5</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
