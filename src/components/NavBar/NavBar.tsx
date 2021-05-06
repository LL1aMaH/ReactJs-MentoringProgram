import React, { memo, SyntheticEvent } from 'react';

import { Button } from 'Components/Button';

import { NAV_BAR_BUTTONS, SORT_BY } from 'Consts/index';
import { SelectField } from 'Components/NavBar/components/SelectField';

import classnames from 'classnames';

import styles from './NavBar.css';

export type TNavBarProps = {
  activeButton: string;
  handleClick: (e: SyntheticEvent) => void;
  handleSelect: (value: string) => void;
};

export const NavBar = memo(function NavBar({
  activeButton,
  handleClick,
  handleSelect,
}: TNavBarProps): JSX.Element {
  return (
    <div className={styles.navbar}>
      <div className={styles.buttons}>
        {NAV_BAR_BUTTONS.map((button) => (
          <Button
            key={button}
            className={classnames(styles.button, {
              [styles.activeButton]: button === activeButton,
            })}
            onClick={handleClick}
          >
            {button}
          </Button>
        ))}
      </div>
      <SelectField
        options={SORT_BY}
        onChange={handleSelect}
        className={styles.dropdown}
        buttonClassName={styles.select}
        optionClassName={styles.select}
        label="SORT BY"
        selectedOptionClassName={styles.selectOption}
        labelClassName={styles.label}
      />
    </div>
  );
});
