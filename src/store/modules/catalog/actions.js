// busca produtos na api para a pagina de catalogo
export function requestProductsCatalog(id) {
  return {
    type: '@catalog/REQUEST_PRODUCT_CATALOG',
    payload: {id},
  };
}

export function ProductsCatalogSucess(data) {
  return {
    type: '@catalog/PRODUCTS_CATALOG_SUCESS',
    payload: {data},
  };
}
export function ProductsCatalogSucessId(cores) {
  return {
    type: '@catalog/PRODUCTS_CATALOG_SUCESS_ID',
    payload: {cores},
  };
}
// actions disparadas quando clica no botão de ver mais
// navega usuário + puxa dados do estato
export function catalogMoreDetailsProduct(id, products) {
  return {
    type: '@catalog/CATALOG_MORE_DETAILS_PRODUCT',
    payload: {id, products},
  };
}

export function catalogMoreDetailsProductSucess(product) {
  return {
    type: '@catalog/CATALOG_MORE_DETAILS_PRODUCT_SUCESS',
    payload: {product},
  };
}
// faz requisições para tabelaprecolinhamatriz
export function requestTablePrice(idProduct, idTable) {
  return {
    type: '@catalog/REQUEST_TABLE_PRICE',
    payload: {idProduct, idTable},
  };
}
export function requestTablePriceSucess(prices) {
  return {
    type: '@catalog/REQUEST_TABLE_PRICE_SUCESS',
    payload: {prices},
  };
}

// volta usuário para o catalogo
export function backCatalog() {
  return {
    type: '@catalog/BACK_CATALOG',
  };
}
export function searchDescription(id, description) {
  return {
    type: '@catalog/SEARCH_DESCRIPITION',
    payload: {id, description},
  };
}
export function searchDescriptionSucess(data) {
  return {
    type: '@catalog/SEARCH_DESCRIPITION_SUCESS',
    payload: {data},
  };
}
export function searchModel(linha, id, model) {
  return {
    type: '@catalog/SEARCH_MODEL',
    payload: {linha, id, model},
  };
}
export function searchModelSucess(data) {
  return {
    type: '@catalog/SEARCH_MODEL_SUCESS',
    payload: {data},
  };
}
