import axios from 'axios';
import { YANDEX_API_KEY, CAR_WASHERS_PER_PAGE, SEARCH_REQUEST } from '../constants/config';

const BASE_URL = 'https://search-maps.yandex.ru/v1/';

const api = () => {
    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: 2000,
    });

    const getListByCity = (city) => instance.get('/', {
        params: {
            text: `${SEARCH_REQUEST}, ${city}`,
            apikey: YANDEX_API_KEY,
            type: 'biz',
            lang: 'RU_ru',
            results: CAR_WASHERS_PER_PAGE,
        }
    });

    return {
        getListByCity,
    }
};

const apiInstance = api();

export default apiInstance;
