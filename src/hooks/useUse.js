// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { apiHeaders } from "../lib/apiHeaders";

// export const useUse = () => {
//   const loginKey = localStorage.getItem("login_key");
//   const memberId = localStorage.getItem("member_id");

//   // custom isLoading
//   const [isLoading, setIsLoading] = useState(true);

//   const { mutate, data } = useMutation({
//     mutationFn: (data) =>
//       axios
//         .post("https://sandbox-api.myvoiaj.com/user/profile", data, {
//           headers: apiHeaders,
//         })
//         .then((response) => response?.data?.data),

//     onSuccess: () => {
//       console.log("success");
//     },
//     onError: () => {
//       console.log("error");
//     },
//   });

//   useEffect(() => {
//     mutate({
//       login_key: loginKey,
//       member_id: memberId,
//     });
//   }, []);

//   return [isLoading, setIsLoading, data];
// };
