import { APIService, newApi } from "@dlvlup/services/api.service";
import { BanksResponseModel, BanksAppModel, ultraMap } from "@dlvlup/core";

// const api = new APIService("https://random-data-api.com/api/v2").setHeaders([
//   {
//     key: "Accept",
//     value: "application/json",
//   },
//   {
//     key: "Content-Type",
//     value: "application/json",
//   },
// ]);
//
// console.log(api.headers);
//
// const body = {
//   size: 2,
// };
//
// api
//   .get<BanksResponseModel[]>("/banks", body)
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((e) => {
//     console.log(e.message);
//   });

const apiNew = new newApi();

const body = {
  size: 2,
};

apiNew
  .getUsers<BanksResponseModel[]>(body)
  .then((res) => {
    console.log(res.data);
  })
  .catch((e) => {
    console.log(e.message);
  });
