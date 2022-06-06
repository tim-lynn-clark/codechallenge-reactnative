import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import axios from "axios";

const fetchComponent = () => {
  const [cancerTypes, setCancerTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = "http://localhost:8888";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const configurationObject = {
      method: "get",
      url: `${baseUrl}/cancer_types`,
    };
    const response = await axios(configurationObject);
    if (response.status === 200) {
      setCancerTypes(response.data);
      console.log(cancerTypes);
    } else {
      console.log("Error Loading Data");
    }
    setLoading(false);
  };

  return { cancerTypes, loading };
};

export default fetchComponent;
