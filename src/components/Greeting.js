import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingFromApi } from '../redux/reducer/greetings';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting.text);

  const dispatch = useDispatch(fetchGreetingFromApi());

  useEffect(() => {
    dispatch(fetchGreetingFromApi());
  }, [dispatch]);

  return (
    <>
      <h1>Greeting: </h1>
      <p>{greeting}</p>
    </>
  );
};

export default Greeting;
