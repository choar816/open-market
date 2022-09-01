import { API_URL } from '/src/utils/api';

const urlToObject = async (url) => {
  // here image is url/location of image
  const response = await fetch(url);
  const blob = await response.blob();
  const file = new File([blob], 'image.jpg', { type: blob.type });
  return file;
};

export const getSellerProducts = () => {
  return fetch(`${API_URL}/seller/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  }).then((res) => res.json());
};

export const removeProduct = (product_id) => {
  return fetch(`${API_URL}/products/${product_id}/`, {
    method: 'DELETE',
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  }).catch((err) => console.log(err));
};

export const uploadProduct = (formData) => {
  return fetch(`${API_URL}/products/`, {
    method: 'POST',
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
    body: formData,
  }).then((res) => res.json());
};

export const editProduct = (formData, product_id) => {
  return fetch(`${API_URL}/products/${product_id}/`, {
    method: 'PUT',
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
    body: formData,
  }).then((res) => res.json());
};

export const trySave = async ({
  product_name,
  image,
  price,
  shipping_method,
  shipping_fee,
  stock,
  product_info,
}) => {
  const formData = new FormData();
  formData.append('product_name', product_name);
  formData.append('image', image);
  formData.append('price', price);
  formData.append('shipping_method', shipping_method);
  formData.append('shipping_fee', shipping_fee);
  formData.append('stock', stock);
  formData.append('product_info', product_info);

  let result = {};
  await uploadProduct(formData)
    .then((data) => {
      // 상품 업로드 성공
      if (data.product_id) {
        result.is_succeeded = true;
      }
      // 상품 업로드 실패
      else {
        for (const [key, value] of Object.entries(data)) {
          result[key] = value.join(' ');
        }
        result.is_succeeded = false;
      }
    })
    .catch((err) => console.log(err));

  return result;
};

export const tryEdit = async ({
  product_id,
  product_name,
  image,
  price,
  shipping_method,
  shipping_fee,
  stock,
  product_info,
}) => {
  // const imageFile = await toDataURL(image).then((dataUrl) => {
  //   return dataURLtoFile(dataUrl, 'imageName.jpg');
  // });
  // console.log(imageFile);
  // const imageFile1 = urlToObject(image);
  // console.log(imageFile1);

  const formData = new FormData();
  formData.append('product_name', product_name);
  formData.append('image', image);
  formData.append('price', price);
  formData.append('shipping_method', shipping_method);
  formData.append('shipping_fee', shipping_fee);
  formData.append('stock', stock);
  formData.append('product_info', product_info);

  let result = {};
  await editProduct(formData, product_id)
    .then((data) => {
      // 상품 수정 성공
      if (data.product_id) {
        result.is_succeeded = true;
      }
      // 상품 수정 실패
      else {
        for (const [key, value] of Object.entries(data)) {
          result[key] = value.join(' ');
        }
        result.is_succeeded = false;
      }
    })
    .catch((err) => console.log(err));

  return result;
};
