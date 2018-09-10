import axios from 'axios'

export const setCards = () => ({
  type: 'SET_CARDS',
})
export const toggleChange = (id) => {
   return (dispatch) => {
      dispatch({
      type: 'TOGGLE_CHANGE',
      id
   })
  }
}

export const setPrices = () => {
  return (dispatch) => {
    return axios.get(`https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD`)
      .then(response => {
        console.log("response", response.data)
        dispatch({
          type: 'SET_PRICES',
          playload: response.data
        })
      })
      .catch(error => {
        throw(error);
      });
  };
}
