import React from 'react';
import { connect } from 'dva';
import styles from './Deduct.css';
import MainLayout from '../components/common/MainLayout.js';

function Deduct() {
  return (
    <div className={styles.normal}>
      <MainLayout>
        <div>fefwfwfw</div>
      </MainLayout>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Deduct);
