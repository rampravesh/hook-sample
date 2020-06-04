import { useState, useEffect } from "react";
import axios from "axios";
const useResources = resource => {
  const [resources, setResource] = useState([]);

  const fetchResources = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResource(response.data);
  };

  useEffect(() => {
    fetchResources(resource);
  }, [resource]);

  return resources;
};

export default useResources;
