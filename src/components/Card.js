import React, { Component } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    direction: 'rtl',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'strech',
    alignItems: 'strech',
    width: '80%',
    border: '1px solid black',
    borderRadius: '9px',
    boxSizing: 'border-box',
    margin: 'auto',
    marginBottom: '50px',
    cursor: 'pointer'
  },
  topImage: {
    position: 'relative',
    color: 'black',
    '& img': {
      width: '100%',
    },
    '& h3': {
      position: 'absolute',
      bottom: '15px',
      right: '15px'
    },
    '& p': {
      position: 'absolute',
      right: '50px',
      bottom: '15px'
    }
  },
  details: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topDetails: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& div': {
      width: '30%'
    }
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  bottomDetails: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    '& *': {
      width: '15%'
    }
  },
  transparent: {
    opacity: '0.5'
  },
  bookmark: {
    position: 'absolute',
    left: '20px',
    bottom: '-20px',
    backgroundColor: 'white',
    borderRadius: '100%',
    padding: '10px',
    cursor: 'pointer'
  },
  more: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    color: 'red',
    backgroundColor: '#fef2f1',
    borderRadius: '24px'
  }
})

const Card = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.topImage}>
        <img src={props.picture.thumbnail ? 'https://address.ir' + props.picture.thumbnail : (props.picture.kitchen ? 'https://address.ir' + props.picture.kitchen : '')} />
        <h3>{props.district}</h3>
        <p>{props.time}</p>
        <div className={classes.bookmark}>
          <span id="tag-wishlist-7cc0d121-dce7-460c-8596-3f6a581d601e" className="HHIOY _b1Cg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="_30HxO"><path d="M19 3H5V21.5L12 16.5L19 21.5V3Z" stroke="#9fa3a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
        </div>
      </div>
      <div className={classes.details}>
        <div className={classes.topDetails}>
          <div className={classes.flexRow}>
            <h2>{props.mortgage_amount / 1000000}</h2>
            <div className={classes.flexColumn}>
              <h2>ودیعه</h2>
              <p className={classes.transparent}>میلیون تومان</p>
            </div>
          </div>
          <div className={classes.flexRow}>
            <h2>{props.monthly_rent / 1000000}</h2>
            <div className={classes.flexColumn}>
              <h2>اجاره</h2>
              <p className={classes.transparent}>میلیون تومان</p>
            </div>
          </div>
        </div>
        <div className={classes.bottomDetails}>
          <div className={classes.flexRow}>
            <img src="https://address.ir/desktop/static/media/area.f727fa91.svg" alt="area" />
            <h3>{props.area}</h3>
            <p>متر</p>
          </div>
          <div className={classes.flexRow}>
            <img src="https://address.ir/desktop/static/media/bed.29a1be17.svg" alt="room" />
            <h3>{props.room}</h3>
            <p>خواب</p>
          </div>
          <div className={classes.more}>
            <span>بیشتر</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.7054 17.2946C15.0947 16.9053 15.095 16.2743 14.7062 15.8846L10.83 12L14.7062 8.11538C15.095 7.72569 15.0947 7.09466 14.7054 6.70538C14.3158 6.31581 13.6842 6.31581 13.2946 6.70538L8.70711 11.2929C8.31658 11.6834 8.31658 12.3166 8.70711 12.7071L13.2946 17.2946C13.6842 17.6842 14.3158 17.6842 14.7054 17.2946Z" fill="black"></path></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card