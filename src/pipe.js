/**
 * helper function that pipes the result 
 * of the first function into the next function.
 * Apply is used to bind 'this'.
 */
export let pipe = ( fn1, fn2 ) => {
	return function( ...args ) {
		let firstFunctionResult = fn1.apply(this, ...args)
		return fn2.apply(this, firstFunctionResult )
	}	
}
