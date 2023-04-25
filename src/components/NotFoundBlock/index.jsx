import React from 'react';

import classes from './NotFoundBlock.module.scss';

export function NotFoundBlock() {
  return (
    <div className={classes.root}>
      <span>😕</span>
      <br />
      <h1>Ничего не найдено</h1>
      <p className={classes.description}>
        К сожалению данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
}
