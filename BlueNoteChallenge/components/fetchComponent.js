import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchComponent = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("tsting props", props.link);
    const configurationObject = {
      method: "get",
      url: props.link,
    };
    const response = await axios(configurationObject);
    if (response.status === 200) {
      setData(response.data);
      console.log(response.data);
    } else {
      console.log("Error Loading Data");
      setLoading(false);
      return <Text>There was an error</Text>;
    }
    setLoading(false);
  };

  return { data, loading };
};

export default fetchComponent;
