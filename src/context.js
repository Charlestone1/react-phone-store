import React, { useState, useContext, useEffect } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

const ProductProvider = (props) => {
  const [myStoreProducts, setMyStoreProducts] = useState(storeProducts);
  const [productDetails, setProductDetails] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);

  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    return addTotals();
  }, [cart]);

  useEffect(() => {
    myProductHandler();
  }, []);

  const myProductHandler = (id) => {
    let updateComplete = myStoreProducts;
    let updatedStoreProduct = storeProducts.map((item) => {
      if (item.id === id) {
        const singleItem = { ...item };
        const updateComplete = [...myStoreProducts, singleItem];
        // return { ...item };
      }
      return { ...item };
    });
    setMyStoreProducts(updatedStoreProduct);
  };

  const getItem = (id) => {
    const oneProduct = myStoreProducts.find((item) => item.id === id);
    return oneProduct;
  };

  const handleDetail = (id) => {
    const oneProduct = getItem(id);
    setProductDetails(() => {
      return oneProduct;
    });
  };

  // *****-----add to cart function Begins-----*****
  const addToCart = (id) => {
    let tempProducts = [...myStoreProducts];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    setMyStoreProducts(() => {
      return tempProducts;
    });
    setCart(() => {
      return [...cart, product];
    });
    addTotals();
    // console.log(cart, productDetails, myStoreProducts);
  };
  // *****-----add to cart Ends-----*****

  // *****-----ModalOpen begins-----*****

  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(() => {
      return product;
    });
    setModalOpen(true);
  };

  // *****-----ModalOpen Ends-----*****
  // *****-----ModalClose begins-----*****

  const closeModal = () => {
    setModalOpen(false);
  };

  // *****-----inside Cart funtions begins-----*****
  const increment = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    setCart([...tempCart]);
    addTotals();
  };

  const decrement = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setCart([...tempCart]);
      addTotals();
    }
  };

  const removeItem = (id) => {
    let tempProducts = [...myStoreProducts];
    let tempCart = [...cart];

    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    setCart(() => {
      return [...tempCart];
    });
    setMyStoreProducts(() => {
      return [...tempProducts];
    });
    addTotals();
  };
  const clearCart = () => {
    setCart(() => {
      return [];
    });
    myProductHandler();
    addTotals();
  };
  const addTotals = () => {
    let subTotal = 0;
    cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setCartSubTotal(() => {
      return subTotal;
    });
    setCartTax(() => {
      return tax;
    });
    setCartTotal(() => {
      return total;
    });
  };
  // *****----- inside Cart funtions begins-----*****
  return (
    <ProductContext.Provider
      value={{
        myStoreProducts,
        setMyStoreProducts,
        productDetails,
        setProductDetails,
        handleDetail,
        addToCart,
        modalOpen,
        openModal,
        closeModal,
        modalProduct,
        setModalProduct,
        cart,
        cartSubTotal,
        cartTax,
        cartTotal,
        increment,
        decrement,
        removeItem,
        clearCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
// Custom Hook
export const useGlobalContext = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider };
