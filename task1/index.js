let axios = require('axios');

let getMoreThan1000 = async () => {
   try{
        let {data} = await axios.get("https://54.uz/works.json") 
        let date = new Date();
        let elements = data.works.find(elem => elem.payment.bonus > 1000 ? true : false);
        console.log(elements)
        let date1 = new Date();
        console.log(date1-date);
    }catch(err){
        console.log(err)
    }
}

getMoreThan1000()