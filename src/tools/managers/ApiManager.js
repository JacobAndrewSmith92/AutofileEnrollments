const url = 'http://localhost:3000';

const APIManager = Object.create(null, {
  getData: {
    value: () => {
      return fetch(`${url}/allData`, {
        headers: {
          'content-type': 'application/json'
        }
      })
    }
  }
})


export default APIManager;