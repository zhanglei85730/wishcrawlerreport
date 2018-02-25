import React from 'react';
import { connect } from 'dva';
import styles from './TransactionMoney.css';

function TransactionMoney() {
  return (
    <div className={styles.normal}>
      <div>ssss</div>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TransactionMoney);
