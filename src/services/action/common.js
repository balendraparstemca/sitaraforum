import { toast } from 'react-toastify';
import { FETCH_AMENTIES, FETCH_CATEGORY, FETCH_COMMUNITYLIST, SET_MESSAGE,FETCH_FLAIR_SUCCESS, FETCH_RULE_SUCCESS, FETCH_RULE_FAILED } from "../actionType";
import CommonService from "../restapi/commonService";
import CommunityService from "../restapi/communityService";


export const fetchRules = (obj) => (dispatch) => {
    return CommonService.getRules(obj).then(
      (response) => {
        console.log(response);
        if (response.status === 'SUCCESS') {
  
          dispatch({
            type: FETCH_RULE_SUCCESS,
            payload: { rule: response.data }
          });
  
          dispatch({
            type: SET_MESSAGE,
            payload: response.message,
          });
  
        }
        else {
          dispatch({
            type: FETCH_RULE_FAILED,
          });
  
          dispatch({
            type: SET_MESSAGE,
            payload: response.message,
          });
  
  
        }
  
        return Promise.resolve();
      },
      (error) => {
  
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: FETCH_RULE_FAILED,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  
  }

export const fetchCategory = () => (dispatch) => {
    return CommonService.getCategory().then((response) => {

            if (response.status === 'SUCCESS') {
                
                dispatch({
                    type: FETCH_CATEGORY,
                    payload: { category: response.data }
                });

            }
            else {
                toast.error(response.message);
                dispatch({
                    type: SET_MESSAGE,
                    payload: response.message,
                });

            }

            return Promise.resolve();
        },
        (error) => {

            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            toast.error(message + ' category not fecthed');
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );

}


export const fetchAmenties = (catid) => (dispatch) => {
    return CommonService.getAmenties(catid).then(
        (response) => {

            if (response.status === 'SUCCESS') {

                dispatch({
                    type: FETCH_AMENTIES,
                    payload: { amenties: response.data }
                });

            }
            else {
                toast.error(response.message);
                dispatch({
                    type: SET_MESSAGE,
                    payload: response.message,
                });

            }

            return Promise.resolve();
        },
        (error) => {

            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            toast.error(message);
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );

}



export const fetchFlair = (comid) => (dispatch) => {
    return CommonService.getCommunityFlair(comid).then(
      (response) => {
   
        if (response.status === 'SUCCESS') {
  
          dispatch({
            type: FETCH_FLAIR_SUCCESS,
            payload: { flair: response.data }
          });
  
          dispatch({
            type: SET_MESSAGE,
            payload: response.message,
          });
  
        }
        else {
        
          dispatch({
            type: SET_MESSAGE,
            payload: response.message,
          });
  
  
        }
  
        return Promise.resolve();
      },
      (error) => {
  
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  
  }


export const fetchCommunityList = (obj) => (dispatch) => {

    return CommunityService.getComunnityList(obj).then(
      (response) => {
        console.log(response);
        if (response.status === 'SUCCESS') {
  
          dispatch({
            type: FETCH_COMMUNITYLIST,
            payload: { communitylist: response.data }
          });
  
          dispatch({
            type: SET_MESSAGE,
            payload: response.message,
          });
  
        }
        else {
  
  
          dispatch({
            type: SET_MESSAGE,
            payload: response.message,
          });
  
  
        }
  
        return Promise.resolve();
      },
      (error) => {
  
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
  
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  
  }