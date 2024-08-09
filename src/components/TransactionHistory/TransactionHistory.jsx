import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistoryTable}>
      <thead className={css.transactionHistoryThead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          let word = item.type;
          let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

          return (
            <tr key={item.id}>
              <td>{capitalizedWord}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
