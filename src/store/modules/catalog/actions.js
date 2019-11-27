export function requestProductsCatalog() {
  return {
    type: '@catalog/REQUEST_PRODUCT_CATALOG',
  };
}

export function ProductsCatalogSucess(data) {
  return {
    type: '@catalog/PRODUCTS_CATALOG_SUCESS',
    payload: {data},
  };
}

export function catalogMoreDetailsProduct() {
  return {
    type: '@catalog/CATALOG_MORE_DETAILS_PRODUCT',
  };
}
