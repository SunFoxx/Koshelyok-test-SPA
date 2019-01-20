export const composeBizResultJson = (apiResponse) => {
    try {
        const { data: {
            features: list,
        } } = apiResponse;
        return (list.map(element => {
            const {
                properties: {
                    CompanyMetaData: props,
                    CompanyMetaData: {
                        Phones: phones = [],
                        Hours: {
                            text: hours,
                        } = {},
                    }
                },
                geometry: {
                    coordinates,
                },
            } = element;
            const phone = phones.find(item => item.type === 'phone');
            return {
                name: props.name,
                address: props.address,
                phone: phone ? phone.formatted : undefined,
                hours,
                coordinates: `${coordinates[0]} ${coordinates[1]}`,
            }
        }));
    } catch (e) {
        console.error(e);
        throw new Error(e.toString());
    }
};
