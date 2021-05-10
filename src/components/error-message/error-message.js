import React from 'react';
import './error-message.css';
import { Result } from 'antd';
import 'antd/dist/antd.css';

const ErrorMessage = () => <div className='error-message'><Result status="error" title="ERROR" /></div>

export default ErrorMessage;


