let time;
let btcusd;

console.log(1)

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function (resp){
        return resp.json()
    })
    .then(function (data){
        //console.log(data)
        time = data.time.updated;
        btcusd = data.bpi.USD.rate;
        console.log(time)
        console.log(btcusd)
    }
    );

