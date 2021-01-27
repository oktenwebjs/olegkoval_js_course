import {httpClient} from "./http-client";
import {ProductsService} from "./products-service";

export const services = {
    productsServices: new ProductsService(httpClient)
}

export const useServices = () => {
    return services;
}