export class Geocode {
  static getCoordinates(address) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const address = $('#address').val("");
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.API_KEY}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();    
    });
  }
}