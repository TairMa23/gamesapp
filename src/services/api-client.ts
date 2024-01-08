import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd374557583644f54b8f1669d326cf28a'
    }
})