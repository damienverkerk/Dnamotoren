import {database} from '../../firebase';

const _addOccasion = (occasion) => ({
    type: 'ADD_OCCASION',
    occasion
});

export const addOccasion = (occasionData = {
    title: '',
    description: '',
    brand: '',
    manufacture_date: ''
}) => {
    return (dispatch) => {
        const occasion = {
            title: occasionData.title,
            description: occasionData.description,
            brand: occasionData.brand,
            manufacture_date: occasionData.manufacture_date
        };

        return database.ref('occasions').push(occasion).then(ref => {
            dispatch(_addOccasion({
                id: ref.key,
                ...occasion
            }));
        });
    };
};

const _removeOccasion =({ id } = {}) => ({
    type: 'REMOVE_OCCASION',
    id
});

export const removeOccasion = ({ id } = {}) => {
    return(dispatch) => {
        return database.ref(`occasions/${id}`).remove().then(() => {
            dispatch(_removeOccasion({ id }));
        })
    }
};

const _editOccasion = (id, updates) => ({
    type: 'EDIT_OCCASION',
    id,
    updates
});

export const editOccasion = (id, updates) => {
    return(dispatch) => {
        return database.ref(`occasions/${id}`).update(updates).then(() => {
            dispatch(_editOccasion(id, updates))
        });
    }
};

const _getOccasions = (occasions) => ({
    type: 'GET_OCCASIONS',
    occasions
});

export const getOccasions = () => {
    return(dispatch) => {
        return database.ref('occasions').once('value').then(snapshot => {
            const occasions = [];
            
            snapshot.forEach(item => {
                occasions.push({
                    id: item.key,
                    ...item.val()
                });
            });
            console.log(occasions);
            dispatch(_getOccasions(occasions));
        });
    };
};




