'use strict';

// FUNCTIONS //

var expm1 = Math.expm1 || function(x) {
  return Math.exp(x) - 1;
};
var pow = Math.pow;



// CDF //

/**
* FUNCTION: cdf( x, sigma )
*	Evaluates the cumulative distribution function (CDF) for a Rayleigh distribution with scale parameter `sigma` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} sigma - scale parameter
* @returns {Number} evaluated CDF
*/
function cdf( x, sigma ) {
	if ( x < 0 ) {
		return 0;
	}
	var s2 = pow( sigma, 2 );
	return -expm1( - pow( x, 2) / ( 2 * s2 ) );
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
