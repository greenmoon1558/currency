const initialState = [{
    increase : true,
    priceChanges: '0',
    isPercent : true,
    timePeriod: "day"
  }];

let setTimePeriodName = (name) => {
  switch(name){
    case "hour": return "Hour change";
    case "day": return "Day change";
    case "week": return "Week change";
    case "month": return "Month change";
    case "year": return "Year change";
    default: return "Change";
  }
}
let getModifiedStateArray = (percentObj, isPercent) => {
  let itemsArr = Object.keys(percentObj).filter(item=>(['day', 'hour', 'week', 'month'].includes(item)));
    return itemsArr.reduce(function(prev, item) {
      return [...prev, {
              increase : percentObj[item]>0? true: false,
              priceChanges: percentObj[item].toString(),
              isPercent : isPercent,
              timePeriod: setTimePeriodName(item)
            }];
    }, []);
}
const prices = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRICES':
      let percents = getModifiedStateArray(action.playload.changes.percent, true);
      let price = getModifiedStateArray(action.playload.changes.price, false);
      return percents.concat(price);
    default:
      return state;
  }
}

export default prices
