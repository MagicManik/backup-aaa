import axios from "axios";
import { useEffect, useState } from "react";
import { apiHeaders } from "../lib/apiHeaders";

const useUser = () => {
  const loginKey = localStorage.getItem("login_key");
  const memberId = localStorage.getItem("member_id");
  const [reFetch, setReFetch] = useState(false);

  const [user, setUser] = useState({});

  const data = JSON.stringify({
    login_key: loginKey,
    member_id: memberId,
  });

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://sandbox-api.myvoiaj.com/user/profile",
    headers: apiHeaders,
    data: data,
  };

  useEffect(() => {
    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        setUser(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reFetch]);

  return [user, reFetch, setReFetch]
}

export default useUser