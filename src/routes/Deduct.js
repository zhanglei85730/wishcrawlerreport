import React from 'react';
import { connect } from 'dva';
import styles from './Deduct.css';

function Deduct() {
  return (
    <div className={styles.normal}>
      <div>fefwfwfw</div>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Deduct);
