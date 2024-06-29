import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
   items: [],
   onAddToCart: () => {},
   onUpdateItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
   if (action.type === "ADD-ITEM") {
      const updatedItems = [...state.items];

      const existingCartItemIndex = updatedItems.findIndex(
         (cartItem) => cartItem.id === action.payload
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
         const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
         };
         updatedItems[existingCartItemIndex] = updatedItem;
      } else {
         const product = DUMMY_PRODUCTS.find(
            (product) => product.id === action.payload
         );
         updatedItems.push({
            id: action.payload,
            name: product.title,
            price: product.price,
            quantity: 1,
         });
      }

      return {
         items: updatedItems,
      };
   }

   if (action.type === "UPDATE-ITEM") {
      const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
         (item) => item.id === action.payload.productId
      );

      const updatedItem = {
         ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
         updatedItems.splice(updatedItemIndex, 1);
      } else {
         updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
         ...state,
         items: updatedItems,
      };
   }

   return state;
}

function CartContextProvider({ children }) {
   const [shoppingCart, shoppingCartDispatch] = useReducer(
      shoppingCartReducer,
      {
         items: [],
      }
   );

   function handleAddItemToCart(id) {
      shoppingCartDispatch({
         type: "ADD-ITEM",
         payload: id,
      });
   }

   function handleUpdateCartItemQuantity(productId, amount) {
      shoppingCartDispatch({
         type: "UPDATE-ITEM",
         payload: {
            productId,
            amount,
         },
      });
   }

   const cartCtx = {
      items: shoppingCart.items,
      onAddToCart: handleAddItemToCart,
      onUpdateItemQuantity: handleUpdateCartItemQuantity,
   };

   return (
      <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
   );
}

export default CartContextProvider;
