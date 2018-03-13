const url = process.env.URL || 'http://localhost:3000/api'

export default class API {
    
    static async request(path, method, body) {
        return await fetch(`${url}${path}`, {
            headers: new Headers({ 'Content-Type': 'application/json' }),
            method: method,
            body: JSON.stringify(body)
        })
    }

}