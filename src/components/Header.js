import React, {useState} from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  header: {
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: '5',
    backgroundColor: 'white',
    direction: 'rtl',
    display: 'flex',
    flexDirection: 'column'
  },
  topHeader: {
    display: 'flex'
  },
  bottomHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topHeaderButton: {
    backgroundColor: '#f1f1f2'
  },
  '@global': {
    a: {
      textDecoration: 'none',
      color: 'grey',
      lineHeight: '0.2',
      width: '17%',
      textAlign: 'center',
      borderRadius: '20px',
      marginBottom: '50px',
      position: 'relative'
    }
  },
  hide: {
    position: 'absolute',
    display: 'none'
  },
  show: {
    position: 'absolute',
    display: 'show',
    width: '200px',
    height: '200px',
    bottom: '600',
    right: 0
  }
})

const Header = (props) => {

  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false)
  const [picture, setpicture] = useState(false)

  const classes = useStyles()

  if(picture != props.hasPicture){
    props.setHasPicture(picture)
  }

  return (
    <div className={classes.header}>
      <div className={classes.topHeader}>
        <p>اجاره خانه در شهر تهران</p>
        <i></i>
      </div>
      <div className={classes.bottomHeader}>
        <a href="#" className={classes.topHeaderButton}>
          <i></i>
          <p>اتاق</p>
        </a>
        <a href="#" className={classes.topHeaderButton}>
          <i></i>
          <p>مساحت</p>
        </a>
        <a href="#" className={classes.topHeaderButton}>
          <i></i>
          <p>قیمت</p>
        </a>
        <a href="#" className={classes.topHeaderButton}>
          <i></i>
          <p>محله</p>
        </a>
        <a className={classes.topHeaderButtonFilter}>
          <button onClick={() => {setFilterModalIsOpen(!filterModalIsOpen)}}>
            <img src="./"></img>
          </button>
          <div className={filterModalIsOpen ? classes.show : classes.hide}>  
            <input type="checkbox" value={picture} onChange={() => setpicture(!picture)}/><label>فقط عکس‌دار</label>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Header;
