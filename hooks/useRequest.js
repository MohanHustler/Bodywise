import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body, onSuccess }) => {
  const [error, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  const doRequest = async (props = {}) => {
    try {
      setErrors(false);
      setLoading(true)
      const response = await axios[props.method || method](props.url || url, { ...body, ...props.body });

      if (onSuccess) {
        setLoading(false)
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(true);
    }
  };

  return { doRequest, error, loading };
};