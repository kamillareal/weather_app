// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

function Card({ data }) {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(moment().format('DD/MM/YYYY'));
  }, []);

  const {
    location,
    current,
  } = data;

  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-2xl min-w-[220px]">

      <div className="text-center">
        <span className="block text-xl font-bold text-slate-600 ">{location.name}</span>
        <span className="text-slate-400 text-sm font-medium">{`${location.region}, ${location.country}`}</span>
        <span className="block text-slate-400 text-sm font-medium">{currentDate}</span>
      </div>

      <div className="font-bold text-indigo-900 flex mt-3 mb-2 justify-center">
        <span className="text-8xl">{current.temp_c}</span>
        <span className="text-2xl mt-2">°C</span>
      </div>

      <div className=" flex justify-center flex-col items-center">
        <img src={current.condition.icon} alt="wather icon" />
        <span className="font-medium text-indigo-900">{current.condition.text}</span>
      </div>

    </div>
  );
}

export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;
