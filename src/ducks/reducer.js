const initialState = {
    userid: 0,
    email: '',
    password: '',
    productid: 0,
    // useridC: 0,
    quantity: 1
}

const UPDATE_USER = 'UPDATE_USER';
const UPDATE_CART = 'UPDATE_CART';
const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
//   const LOGOUT = 'LOGOUT';

export default function reducer(state = initialState, action) {
    let { type, payload } = action;
    // console.log(payload)
    switch (type) {
        case UPDATE_USER:
            return Object.assign({}, state, {
                userid: payload.userid,
                email: payload.email
                // password: payload.password
            });

        case UPDATE_CART:
            console.log(payload)
            return Object.assign({}, state, {
                userid: payload.userid,
                productid: payload.productid,
                quantity: payload.quantity
            });
        //   case LOGOUT:
        //     return initialState;

        case INCREASE_QUANTITY:
            return Object.assign({}, state, {
                quantity: payload.quantity + 1

            });

        case DECREASE_QUANTITY:
            return Object.assign({}, state, {
                quantity: payload.quantity - 1
            })

        default:
            return state;
    }
}

export function updateUser(userid, email) {
    console.log(userid[0].email)
    return {
        type: UPDATE_USER,
        payload:
            userid[0]
        // email

    }
}

export function updateCart(cartItem) {
    const { userid, productid } = cartItem;
    console.log(cartItem)
    return {
        type: UPDATE_CART,
        payload:
            cartItem
        //     userid,
        // productid

    }
}

export function increaseQuantity(quantity) {
    console.log(quantity)
    return {
        type: INCREASE_QUANTITY,
        payload:
            quantity
    }
}

export function decreaseQuantity(quantity) {
    console.log(quantity)
    return {
        type: DECREASE_QUANTITY,
        payload:
            quantity
    }
}


//   export function logout() {
//     return {
//       type: LOGOUT
//     }
//   }

  // WEBPACK FOOTER //
  // ./src/ducks/reducer.js