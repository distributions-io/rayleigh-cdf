'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( sigma )
*	Partially applies scale parameter `sigma` and returns a function for evaluating the cumulative distribution function (CDF) for a Rayleigh distribution.
*
* @param {Number} sigma - scale parameter
* @returns {Function} CDF
*/
function partial( sigma ) {

	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for a Rayleigh distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
