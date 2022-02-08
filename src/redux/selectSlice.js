import {createSlice} from '@reduxjs/toolkit'

const selectSlice = createSlice({
    name: 'select product',
    initialState: {
        products: [
            {src: 'https://media.istockphoto.com/photos/kidney-beans-in-a-white-background-picture-id535939107?k=20&m=535939107&s=612x612&w=0&h=Sp3ckZUEcbNQysNTtqf2n4_19JCM0hdg-I8xdlmMutI=',id:1,title: 'Beans - 1 Kg', price: 16,amount:1,selected: false},
            {src: 'https://i0.wp.com/kashmirlife.net/wp-content/uploads/2018/09/beetroot.jpg?resize=696%2C503&ssl=1',id:2,title: 'Beetroot - 1 Kg', price: 18,amount:1,selected: false},
            {src: 'https://m.media-amazon.com/images/I/51JbI+BTW7L._SL1000_.jpg',id:3,title: 'Brinjal - 1 Kg', price: 15,amount:1,selected: false},
            {src: 'https://m.media-amazon.com/images/I/61W23122UBL._AC_SS450_.jpg',id:4,title: 'Brocolli - 1 Kg', price: 12,amount:1,selected: false},
            {src: 'https://i-tree.in/wp-content/uploads/2020/11/carrots-7-1200.jpg',id:5,title: 'Carrot - 1 Kg', price: 11,amount:1,selected: false},
            {src: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/02/Cauliflower.jpg?quality=82&strip=all',id:6,title: 'Cauliflower - 1 Kg', price: 20,amount:1,selected: false},
            {src: 'https://www.farmersfayre.co.uk/wp-content/uploads/2020/07/Cucumber.jpg',id:7,title: 'Cucumber - 1 Kg', price: 23,amount:1,selected: false},
            {src: 'https://jugais.com/wp-content/uploads/2020/07/tomate-1.jpg',id:8,title: 'Tomato - 1 Kg', price: 14,amount:1,selected: false},
        ],
        cart: [],
        Total: 0,
    },
    reducers: {
        addProduct: (state,action)=> {

            let cartproduct = state.products.filter(pr=>{
                if(pr.selected){
                }else {
                    return pr.id === action.payload
                }
            })
            state.cart = [...state.cart,...cartproduct]
            let newTotal = state.cart.map(pr=>{
               return  pr.price * pr.amount
            })
            let calc = newTotal.reduce((acc,next)=>{
                return acc+ next;
            },0)
            state.Total = calc
            state.products.map(prod=>{
                if(prod.id === action.payload){
                    prod.selected = true
                }
            })
        },

        deletePro: (state,action)=>{
            let newCart = state.cart.filter(pro=>{
                return pro.id !== action.payload
            })
            state.cart = newCart;
            let newTotal = state.cart.map(pr=>{
                return  pr.price * pr.amount
             })
             let calc = newTotal.reduce((acc,next)=>{
                 return acc+ next;
             },0)
             state.Total = calc
             state.products.map(prod=>{
                if(prod.id === action.payload){
                    prod.selected = false
                }
            })
        },

        increase: (state,action)=> {
                state.products.map(pro=>{
                     if(pro.id === action.payload){
                         pro.amount += 1
                     }
                 })
             },

        decrease: (state,action)=> {
                state.products.map(pro=>{
                     if(pro.id === action.payload && pro.amount> 1){
                         pro.amount -= 1
                     }
                 })
             },
    }
})

export const {addProduct ,increase,decrease,deletePro,changepro} = selectSlice.actions

export default selectSlice.reducer