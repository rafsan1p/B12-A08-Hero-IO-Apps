import axios from "axios";
import { useEffect, useState } from "react";

const useFetchApps = () => {
  const [appsList, setAppsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("../appsData.json")
      .then((response) => setAppsList(response.data))
      .catch((err) => setErrorMsg(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { appsList, isLoading, errorMsg };
};

export default useFetchApps;