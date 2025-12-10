export function TableView({ params }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {params.transactions?.map((i, index) => (
          <tr key={i.id}>
            <td>{i.type}</td>
            <td>{i.amount}</td>
            <td>{i.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
