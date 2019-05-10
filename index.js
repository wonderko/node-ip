let request = require('request');
let url='http://ip-api.com/json';
let dados = '';
request(url, function (err, response, body) {
  if(err){
    console.log('Ocorreu o erro:', error);
  } else {
	  let ipInfo = JSON.parse(body);
	dados =`
	         Atenção: Algumas informações podem estar erradas!
	         O seu IP: ${ipInfo.query}
	         A sua cidade: ${ipInfo.city}
	         O seu país: ${ipInfo.country}
		 Região: ${ipInfo.regionName}
		 Timezone: ${ipInfo.timezone}
		 Código-Postal: ${ipInfo.zip}
		 Latitude: ${ipInfo.lat}
		 Longitude: ${ipInfo.lon}
		 Organização: ${ipInfo.as}
		 Código de país: ${ipInfo.countryCode}
		 O seu ISP: ${ipInfo.isp}
	    --------------------------------`;
			console.log(dados);
  }
  });