import React from 'react';
import { connect } from 'dva';
import { Form, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import PeriodSelect from '../PeriodSelect/PeriodSelect.js';
import GlobalSelect from '../GlobalSelect/GlobalSelect.js';
import GlobalButtons from '../GlobalButtons/GlobalButtons.js';
import GlobalInput from '../GlobalInput/GlobalInput.js';
import GlobalRangePicker from '../GlobalRangePicker/GlobalRangePicker.js';
import style from '../../config/global.less';

function GlobalSearchForm(props) {
  const { formCollapse, formItems, collapseFormItems,
    autoCol, buttonsCol, onSubmitHandle, children, form, dispatch, ...rest } = props;
  // form提交事件
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, fieldsValue) => {
      onSubmitHandle(fieldsValue);
    });
  };
  return (
    <Form layout="inline" onSubmit={handleSubmit} className={style.coustomFormLyout} {...rest}>
      <Row>
        {
          formItems.map((v, i) => {
            const temp = autoCol || v.formCol;
            return (
              <Col {...temp} key={i} >
                {v.type === 'select' ? <GlobalSelect {...v} form={props.form} /> : (
                  v.type === 'period' ? <PeriodSelect {...v} form={props.form} /> : (
                    v.type === 'text' ? <GlobalInput {...v} form={props.form} /> : (
                      v.type === 'rangePicker' ? (
                        <GlobalRangePicker {...v} form={props.form} />
                      ) : ''
                    )
                  )
                )}
              </Col>
            );
          })
        }
        <Col {...buttonsCol}>
          <GlobalButtons childrenNodes={children} />
        </Col>
      </Row>
      {
        formCollapse ? (
          <Row >
            {
              collapseFormItems.map((v, i) => {
                const temp = autoCol || v.formCol;
                return (
                  <Col {...temp} key={i} >
                    {v.type === 'select' ? <GlobalSelect {...v} form={props.form} /> : (
                      v.type === 'period' ? <PeriodSelect {...v} form={props.form} /> : (
                        v.type === 'text' ? <GlobalInput {...v} form={props.form} /> : (
                          v.type === 'rangePicker' ? (
                            <GlobalRangePicker {...v} form={props.form} />
                          ) : ''
                        )
                      )
                    )}
                  </Col>
                );
              })
            }
          </Row>
        ) : ''
      }
    </Form >
  );
}

GlobalSearchForm.propTypes = {
  formItems: PropTypes.array,
  buttonsCol: PropTypes.object,
};
const mapStateToProps = ({ globalSearchForm }) => {
  return globalSearchForm;
};
const GlobalSearchFormWrapped = Form.create()(GlobalSearchForm);
export default connect(mapStateToProps)(GlobalSearchFormWrapped);
