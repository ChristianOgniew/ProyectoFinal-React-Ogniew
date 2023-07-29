const products = [
  {
    id: "1",
    name: "Remera burberry",
    price: 9000,
    category: "Remera",
    img: "../images/BurBerryRemera.png",
    stock: 25,
    description: "Remera Burberry color Negro de L a XXL",
  },
  {
    id: "2",
    name: "Remera Moncler",
    price: 10000,
    category: "remera",
    img: "../images/MonclerRemera.png",
    stock: 20,
    description: "Remera Moncler color Negro de L a XXL",
  },
  {
    id: "3",
    name: "Remera Essentials",
    price: 8000,
    category: "remera",
    img: "../images/EssentialRemera.png",
    stock: 15,
    description: "Remera Essentials color Negro de L a XXL",
  },
];

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === category));
    }, 500);
  });
};

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
