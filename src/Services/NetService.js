
function checkIt(resp) {
    if  ( parseInt(resp.status / 100, 10) === 2 ||
          parseInt(resp.status / 100, 10) === 3
        ) {
        return resp;
    } else {
        throw resp;
    }
}

function catchIt(err) {
    if (err.message === "Unexpected token O in JSON at position 0") {
        return "OK";
    }
    if ( parseInt(err.status / 100, 10) === 4 ){
        throw err;
    }
    else if ( parseInt(err.status / 100, 10) === 5 ){
        throw err;
    } else {
        return err;
    }
}

export default class Net{
	constructor(){
        this.BaseUrl = "http://memory-game-api.atlaspower.gr"
		this.DefaultHeaders = {
			 Accept: 'application/json',
    		'Content-Type': 'application/json',
		}
	}

	get(url){
        let urb = this.BaseUrl + url
        return window.fetch(urb)
        .then(checkIt).then((r) => r.json()).catch(catchIt);
	}

	post(url,body,headers = this.DefaultHeaders){
        let urb = this.BaseUrl + url;
        console.log(urb)
		return window.fetch(urb,{
			method:"POST",
			headers:headers,
			body: JSON.stringify(body)
	    }).then(checkIt).then((r) => r.json()).catch(catchIt);
	}
} 