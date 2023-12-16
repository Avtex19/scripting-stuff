const actionStuff = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === action.payload
            ? { ...cartItem, amount: cartItem.amount + 1 }
            : cartItem
        ),
      }
    case 'DECREASE':
      return {
        ...state,
        cart: state.cart
          .map((cartItem) =>
            cartItem.id === action.payload
              ? { ...cartItem, amount: cartItem.amount - 1 }
              : cartItem
          )
          .filter((cartItem) => cartItem.amount !== 0),
      }
    case 'GET_TOTALS':
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem
          const itemTotal = price * amount

          cartTotal.total += itemTotal
          cartTotal.amount += amount
          return cartTotal
        },
        {
          total: 0,
          amount: 0,
        }
      )
      total = parseFloat(total.toFixed(2))

      return { ...state, total, amount }

      case 'CLEAR_CART':
      return { ...state, cart: [] }
    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      }
    case 'LOADING':
      return { ...state, loading: true }
    case 'DISPLAY_ITEMS':
      return { ...state, cart: action.payload, loading: false }
    case 'TOGGLE_AMOUNT':
      return {
        ...state,
        cart: state.cart
          .map((cartItem) =>
            cartItem.id === action.payload.id
              ? action.payload.type === 'inc'
                ? { ...cartItem, amount: cartItem.amount + 1 }
                : { ...cartItem, amount: cartItem.amount - 1 }
              : cartItem
          )
          .filter((cartItem) => cartItem.amount !== 0),
      }
    default:
      throw new Error('Error')
  }
}

export default actionStuff
