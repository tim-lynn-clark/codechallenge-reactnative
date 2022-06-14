import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import axios from "axios";

const fetchComponent = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let url;

    if (Platform.OS === "ios") {
      url = props.link;
    } else {
      url = props.link.replace("localhost", "10.0.2.2");
    }
    try {
      const configurationObject = {
        method: "get",
        url: url,
      };
      const response = await axios(configurationObject);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      setData(null);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading };
};

export default fetchComponent;
