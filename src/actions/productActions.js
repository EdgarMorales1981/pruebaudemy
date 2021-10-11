import axios from 'axios'
import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS
  } from "../constants/productContants";

  export const getProducts = async(dispatch) =>{
    try {
        dispatch({  ALL_PRODUCTS_REQUEST })

        const {data} = await axios.get('/api/v1/products')
        
        dispatch({ 
            ALL_PRODUCTS_SUCCESS,
            payload:data
        })
    
    } catch (error) {   
        console.log(error)
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
        
    }
  }

  //clear error 

  export const clearErrors = () => async(dispatch)=>{
      dispatch({
          type:CLEAR_ERRORS
      })
  }