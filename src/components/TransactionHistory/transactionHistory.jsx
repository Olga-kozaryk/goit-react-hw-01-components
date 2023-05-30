import PropTypes from 'prop-types';
import css from './transactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
       
        {transactions.map(({ id, type, amount, currency }) => {
          return (       
            <tr className={css.tr} key={id}>
            <td
              className={css.text}
              
              >
                {type}
              </td>
              <td
                className={css.td}
              
              >
                {amount}
              </td>
              <td
                className={css.td}
              
              >
                {currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};


TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};