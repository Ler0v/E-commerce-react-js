   const APIURL = 'http://csgobackpack.net/api/GetItemsList/v2/'

   function getWeapons(name) {
    fetch(`${APIURL}`)
    .then(resultado => resultado.json())
    .then(arma => {
        console.log(arma);
    })
    .catch((error)=>{
        console.log(error);
    });

   }

   getWeapons(2)