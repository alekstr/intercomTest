function distance(lat1, lon1, lat2, lon2) {
	//Engineering formula for better performance
 
	//For rad conversion Pi/180
	var p = 0.017453292519943295;
  	var c = Math.cos;
    lat1 = parseFloat(lat1); lon1 = parseFloat(lon1);
    lat2 = parseFloat(lat2); lon2 = parseFloat(lon2);
	var dlat = lat2 - lat1;
	var dlon = lon2 - lon1;
	//We refactor formula to have smaller calculations in it, e.g sin^2 ==  1/2 * (1 - cos)
  	var det = 0.5 - c(dlat * p)/2 + (c(lat1 * p) * c(lat2 * p) * (1 - c(dlon * p)))/2;
	//R = 6371;
	//dist = R * 2arcsin(sqrt(det));

  	return 12742 * Math.asin(Math.sqrt(det))
}

function inRadius(center, radius, point) {
    return distance(center[0], center[1], point[0], point[1]) <= radius; 
}

module.exports = {
    distance: distance,
    inRadius: inRadius
}
