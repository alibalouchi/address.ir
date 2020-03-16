import React from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerButton: {
    width: '25%',
    textAlign: 'center'
  }
})

const Footer = (props) => {

  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <div className={classes.footerButton}>
        <i></i>
        <p>خانه</p>
      </div>
      <div className={classes.footerButton}>
        <i></i>
        <p>نشان شده ها</p>
      </div>
      <div className={classes.footerButton}>
        <i></i>
        <p>گوش به زنگ ها</p>
      </div>
      <div className={classes.footerButton}>
        <i></i>
        <p>بیشتر</p>
      </div>
    </div>
  );
}

export default Footer;
