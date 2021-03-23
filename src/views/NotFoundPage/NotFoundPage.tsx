import React, { useCallback } from 'react';

import { Button } from 'Components/Button';
import { Logo } from 'Components/Logo';

import logo404 from 'Assets/pictures/logo404.jpg';
import { useHistory } from 'react-router-dom';

import styles from './NotFoundPage.css';

const NotFoundPage = (): JSX.Element => {
  const history = useHistory();
  const onClick = useCallback(() => {
    history.push('/');
  }, []);
  return (
    <>
      <div className={styles.notFound}>
        <Logo className={styles.logoHeader} />
        <div className={styles.info}>
          <p className={styles.paragraph}>Page Not Found</p>
          <img src={logo404} alt="404" className={styles.logo404} />
          <Button className={styles.button} onClick={onClick}>
            GO BACK TO HOME
          </Button>
        </div>
      </div>
      <Logo className={styles.logoFooter} />
    </>
  );
};

export default NotFoundPage;
