export class ProductsService {
    constructor(httpClient) {
        this.api = httpClient;
        this.baseUrl = 'https://fakestoreapi.com/products';
    }

    getProducts() {
        return this.api.get(this.baseUrl);
    }
}