import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getOne = async (id) => {
    const response = await axios.get(baseUrl + '/' + id)
    return response.data
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const response = await axios.post(baseUrl, content)
    return response.data
}

const updateOne = async (id, content) => {
    const response = await axios.put(baseUrl + '/' + id, content)
    return response.data
}

const updateAll = async (content) => {
    const anecdotes = {
        anecdotes: content
    };

    const response = await axios.post(baseUrl, anecdotes)
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getOne, getAll, createNew, updateOne, updateAll }
