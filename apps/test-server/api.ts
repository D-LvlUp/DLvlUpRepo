import { APIService, newApi } from '@dlvlup/services/api.service'
import {BanksResponseModel, BanksAppModel, ultraMap} from '@dlvlup/core'



const api = new APIService('https://random-data-api.com/api/v2')
    .setHeaders([
        {
            key: 'Accept',
            value: 'application/json'
        },
        {
            key: 'Content-Type',
            value: 'application/json'
        },
    ]);

console.log(api.headers)

const body = {
    size: 2
}

// api.get<BanksResponseModel[]>('/banks', body).then(res => {
//     console.log(res.data)
// }).catch(e => {
//     console.log(e.message)
// })

const NewApi = new newApi('https://random-data-api.com/api/v2')

NewApi.getUsers(body).then(res => {
    console.log(res.data)
}).catch(e => {
    console.log(e.message)
})

// NewApi.get<BanksResponseModel[]>('/banks', body).then(res => {
//     console.log(res.data)
// }).catch(e => {
//     console.log(e.message)
// })

console.log(NewApi)


