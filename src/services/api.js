import axios from 'axios';

const API_KEY = '7ef2c163-9187-4699-8f37-97aaf4796a54';
const BASE_URL = 'https://search-maps.yandex.ru/v1/';

const api = () => {
    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: 2000,
    });

    const getListByCity = (city) => instance.get('/', {
        params: {
            text: `автомойка, ${city}`,
            apikey: API_KEY,
            type: 'biz',
            lang: 'RU_ru',
            results: 50,
        }
    });

    return {
        getListByCity,
    }
};

const apiInstance = api();

export default apiInstance;
