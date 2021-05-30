export const initialState={
    basket:[],
    //     {
    //     id:"12345",
    //     title:"the lean startup staysgjxjx the lean startup staysgjxjxthe lean startup lean startupKKK ",
    //     price:11.2,
    //     rating:4,
    //     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDblwOz8Pc4ux6huIrM7FdRBZg2TNxnPSVEA&usqp=CAU"
    // },

    // {
    //     id:"12345",
    //     title:"the lean startup staysgjxjx the lean startup staysgjxjxthe lean startup lean startupKKK ",
    //     price:11.2,
    //     rating:4,
    //     image:"https://www.mobiledekho.com/wp-content/uploads/2018/01/952x501-3-5.jpg"
    // },

    user:null,
};
//THI IS ADDING ALL THE PRICES TO THE BASKET ADDING ALL MONEY
export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0)

function reducer(state,action) {
    console.log(action);
    switch(action.type) {
        ///logic to add item to basket//
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.item]
            };

            case 'REMOVE_FROM_BASKET':
                ///logic to remove from basket//

                let newBasket=[...state.basket];
                const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);

                if(index>=0) {
                    //item exist in basket
                    newBasket.splice(index,1);
                }else{
                    console.warn(
                    `cant remove product(id:${action.id}) as its not in basket`
                    );
                }
                return{
                    ...state,
                     basket:newBasket,
                    };

                default:
                    return state;
    }
}

export default reducer;