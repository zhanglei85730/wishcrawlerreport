import React from 'react';
import { connect } from 'dva';
import styles from './TransactionMoney.css';
import MainLayout from '../components/common/MainLayout.js';

function TransactionMoney() {
  return (
    <div className={styles.normal}>
      <MainLayout>
        <div>ssss</div>
      </MainLayout>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TransactionMoney);
