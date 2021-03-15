import React from 'react';

import { Button } from 'Components/Button';

import { NAV_BAR_BUTTONS, SORT_BY } from 'Consts/index';
import { SelectField } from 'Components/NavBar/components/SelectField';

import styles from './NavBar.css';

export const NavBar = (): JSX.Element => {
  return (
    <div className={styles.navbar}>
      <div className={styles.buttons}>
        {NAV_BAR_BUTTONS.map((button) => (
          <Button key={button} className={styles.button}>
            {button}
          </Button>
        ))}
      </div>
      <SelectField
        options={SORT_BY}
        onChange={(value) => console.log(value)}
        className={styles.dropdown}
        buttonClassName={styles.button}
        optionClassName={styles.button}
        label="SORT BY"
        selectedOptionClassName={styles.selectOption}
        labelClassName={styles.label}
      />
    </div>
  );
};
