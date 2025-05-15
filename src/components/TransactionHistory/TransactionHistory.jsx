import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Amount</th>
            <th className={styles.th}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr className={styles.tr} key={item.id}>
              <td className={styles.td}>{item.type}</td>
              <td className={styles.td}>{item.amount}</td>
              <td className={styles.td}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
