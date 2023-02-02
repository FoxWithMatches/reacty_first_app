import { AuthForm } from 'Components/AuthForm';
import { routes } from 'Helpers/Constants/routes';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserSelectors, userSliceActions } from 'Store';

export const Auth = () => {
  const loading = useSelector(UserSelectors.getUserLoading);
  const token = useSelector(UserSelectors.getUserToken);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && token !== 'error') {
      navigate(routes.main);
      dispatch(userSliceActions.setUserLoading(false));
    }
    if (token === 'error') {
      dispatch(userSliceActions.setUserLoading(false));
    }
  }, [token]);

  return <div>{loading ? <h1>Loading...</h1> : <AuthForm />}</div>;
};
