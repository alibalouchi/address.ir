import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  container: {
    marginTop: '200px'
  }
})

const CardsList = (props) => {

  const [start, setStart] = useState(0)
  const [limit, setLimit] = useState(10)
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [cards, setCards] = useState([])
  const [hasPicture, setHasPicture] = useState(true)

  useEffect(() => {
    loadCards()
  }, [])

  useEffect(() => {
    setHasPicture(props.hasPicture);
    setCards([]);
    loadCards();
  }, [props.hasPicture])

  const loadCards = () => {
    setIsLoading(true);
      axios.get('https://address.ir/rest/tgr/v2/catalogs/search/' + start + '/' + limit + '?check_count=true&catalog_type=rent&marketing_url=8a2c81ee87ff530fdef752ca6654beb8' + (hasPicture ? '&has_picture=true' : ''))
      .then((data) => {
        const nextCards = data.data.data.map(card => ({
          picture: {
            thumbnail: card.thumbnail_img,
            saloon: card.saloons_img,
            kitchen: card.kitchens_img,
            rooms: card.rooms_img
          },
          district: card.district_name,
          time: card.time,
          mortgage_amount: card.mortgage_amount,
          monthly_rent: card.monthly_rent,
          room: card.room_qty,
          area: card.unit_area_extent,
        }))
        setIsLoading(false)
        let newCards = [...cards, ...nextCards]
        setCards(newCards)
      })
      .catch((err) => {
        setError(err.message)
        setIsLoading(false)
      })
  }

  document.addEventListener("scroll", () => {
    if (error || isLoading) return;

    if (
      window.innerHeight + document.documentElement.scrollTop
      >= document.documentElement.offsetHeight - 100
    ) {
      let newStart = start + limit
      setStart(newStart);
      loadCards()
    }
  }
  )

  const classes = useStyles()

    return <div className={classes.container}>
      {cards.map(card => {
        return <Card
          key={card.id}
          picture={card.picture} 
          district={card.district} 
          time={card.time}
          mortgage_amount={card.mortgage_amount}
          monthly_rent={card.monthly_rent}
          room={card.room}
          area={card.area}
        />
      })}
      {isLoading && <div>Loading ...</div>}
    </div>
  }

export default CardsList 