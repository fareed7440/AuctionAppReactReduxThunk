import Actions from './actionTypes'
import * as DB from '../../firebase/database'
import { browserHistory } from 'react-router';

function addProduct(productData) {
    console.log('33333333333333', productData)
    return dispatch => {
        dispatch(addProductRequest());

        return DB.database.ref('/BitProducts').push(productData, function (error) {
            console.log('data', productData)
            if (error) {
                alert('error')
            }

            else {
                dispatch(addProductRequestSuccess())
                alert('successfully added')
                // browserHistory.push('/main')
            }
        });

    }
}


export function addProductRequest() {
    return {
        type: Actions.ADDPRODUCTREQUEST
    }
}


export function addProductRequestSuccess(data) {
    return {
        type: Actions.ADDPRODUCTREQUESTSUCCESS,
        data
    }

}
export function addProductRequestFailed() {
    return {
        type: Actions.ADDPRODUCTREQUESTFAILED
    }
}
export default addProduct;