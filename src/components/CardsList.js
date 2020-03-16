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

  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(10)
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [cards, setCards] = useState([])
  const [hasPicture, setHasPicture] = useState(false)

  useEffect(() => {
    loadCards()
  }, [])

  useEffect(() => {
    setIsLoading(true)
    setHasPicture(props.hasPicture);
    setCards([]);
    loadCards();
    setSkip(0)
    return setIsLoading(false)
  }, [props.hasPicture , hasPicture])

  const loadCards = () => {
    setIsLoading(true);
      axios.get('https://address.ir/rest/tgr/v2/catalogs/search/' + skip + '/' + limit + '?check_count=true&catalog_type=rent&marketing_url=8a2c81ee87ff530fdef752ca6654beb8' + (hasPicture ? '&has_picture=true' : ''))
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
        let newCards = [...cards, ...nextCards]
        setCards(newCards)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setIsLoading(false)
      })
  }

  document.addEventListener("scroll", () => {
    if (error) return;

    if (window.innerHeight + document.documentElement.scrollTop
      >= document.documentElement.offsetHeight - 50 && isLoading
    ){
      let newSkip = skip + limit
      setSkip(newSkip);
      loadCards()
      setIsLoading(false)
    }

    if (
      window.innerHeight + document.documentElement.scrollTop
      >= document.documentElement.offsetHeight - 50
    ) {
      setIsLoading(true)
    }
  }
  )

  console.log(cards, hasPicture)

  const classes = useStyles()

    return <div className={classes.container}>
      {cards.map(card => {
        return <Card
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