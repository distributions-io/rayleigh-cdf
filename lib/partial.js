'use strict';

// FUNCTIONS //

var expm1 = Math.expm1 || function(x) {
  return Math.exp(x) - 1;
};
var pow = Math.pow;


// PARTIAL //

/**
* FUNCTION: partial( sigma )
*	Partially applies scale parameter `sigma` and returns a function for evaluating the cumulative distribution function (CDF) for a Rayleigh distribution.
*
* @param {Number} sigma - scale parameter
* @returns {Function} CDF
*/
function partial( sigma ) {
	var s2 = pow( sigma, 2 );
	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for a Rayleigh distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {
		if ( x < 0 ) {
			return 0;
		}
		return -expm1( - pow( x, 2) / ( 2 * s2 ) ) ;
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
