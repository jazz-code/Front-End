import React, { useState, useEffect } from 'react';
import axios from "axios";

const Celeb = props => {
  const [celebs, setCelebs] = useState([])

    useEffect(() => {
    axios
      .get('https://bw-celeb-dead-app.herokuapp.com/celebs')
      .then(res => setCelebs(res.data))
      .catch(err => err.response)
    }, [])

  return <>hi</>;
};

export default Celeb;
