import addProduct from '../store/actions/addProductAct'
import AddProduct from '../components/addProduct'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';








function mapStataToProps(state){
    return{
      app : state.AddProductReducer
    }
}


function mapDispatchToProps(dispatch){
    return{
       AddProduct : (data)=>dispatch(addProduct(data)),
    }
}


const AddProductContainer =connect(mapStataToProps,mapDispatchToProps)(AddProduct);
export default AddProductContainer; 