const categoryList = () => {
  return fetch("https://alura-json-server.vercel.app/categories").then((answer) => {
    return answer.json();
  });
};

const productList = () => {
  return fetch("https://alura-json-server.vercel.app/products").then((answer) => {
    return answer.json();
  });
};

const seeProduct = (id) => {
  return fetch(`https://alura-json-server.vercel.app/products/${id}`).then((answer) => {
    return answer.json();
  });
};

const sixProducts = (id) => {
  return fetch(`https://alura-json-server.vercel.app/categories/${id}/products?_limit=6`).then(
    (answer) => {
      return answer.json();
    }
  );
};

const createProduct = (image, title, price, details, categoryId) => {
  return fetch("https://alura-json-server.vercel.app/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: uuid.v4(), image, title, price, details, categoryId }),
  })
    .then((answer) => console.log(answer))
    .catch((err) => console.log(err));
};

const deleteProduct = (id) => {
  return fetch(`https://alura-json-server.vercel.app/products/${id}`, {
    method: "DELETE",
  });
};

const updateProduct = (id, image, title, details, price, categoryId) => {
  return fetch(`https://alura-json-server.vercel.app/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image, title, details, price, categoryId }),
  })
    .then((answer) => console.log(answer))
    .catch((err) => console.log(err));
};

export const productServices = {
  categoryList,
  productList,
  seeProduct,
  sixProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};
