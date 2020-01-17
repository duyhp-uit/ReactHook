
export default function() {  
    return fetch('https://ghibliapi.herokuapp.com/people/').then(res=> {return res.json()})
      .catch(error => {return console.log(error)});
  }