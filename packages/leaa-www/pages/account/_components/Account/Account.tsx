import React from 'react';
import cx from 'classnames';

import { LogoutButton } from '@leaa/www/components/LogoutButton';
import { IAuthInfo } from '@leaa/www/interfaces';

import style from './style.less';

interface IProps {
  user: IAuthInfo;
}

export default (props: IProps) => {
  return (
    <div className={style['wrapper']}>
      <div className={cx('g-full-container', style['full-container'])}>
        <div>
          <h1 className={style['title']}>Account</h1>

          <div className={style['account-info']}>
            <h3>Name: {props.user.name}</h3>
            <h3>Email: {props.user.email}</h3>
          </div>

          <div className={style['button-bar']}>
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};