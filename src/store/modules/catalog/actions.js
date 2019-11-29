// busca produtos na api para a pagina de catalogo
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

// actions disparadas quando clica no botão de ver mais
// navega usuário + puxa dados do estato + faz requisições para tabelaprecolinhamatriz
export function catalogMoreDetailsProduct(id) {
  return {
    type: '@catalog/CATALOG_MORE_DETAILS_PRODUCT',
    payload: {id},
  };
}

export function catalogMoreDetailsProductSucess(
  linha,
  matriz,
  descricao,
  caracteristica
) {
  return {
    type: '@catalog/CATALOG_MORE_DETAILS_PRODUCT_SUCESS',
    payload: {linha, matriz, descricao, caracteristica},
  };
}
export function requestTablePrice() {
  return {
    type: '@catalog/REQUEST_TABLE_PRICE',
  };
}
export function requestTablePriceSucess(table) {
  return {
    type: '@catalog/REQUEST_TABLE_PRICE_SUCESS',
    payload: {table},
  };
}

// volta usuário para o catalogo
export function backCatalog() {
  return {
    type: '@catalog/BACK_CATALOG',
  };
}
