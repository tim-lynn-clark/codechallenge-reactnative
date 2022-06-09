import React, { useEffect, useState } from "react";
import axios from "axios";
import { create } from "apisauce";

const fetchComponent = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log("props received:", props.link);
      const configurationObject = {
        method: "get",
        url: props.link,
      };
      const response = await axios(configurationObject);

      console.log("response:", response);
      if (response.status === 200) {
        setData(response.data);
        console.log(response.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return { data, loading };
};

export default fetchComponent;
