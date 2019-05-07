/** This code implements Color class.
		Color is responsible to store all the color variables and settings,
		thus, this class make all color properties such as emotion, nature, temperature... */

/** I am testing make my classes without ';' */


class Color{
	constructor( r,g,b ){
		this._r = r
		this._g = g
		this._b = b
	}

	get r(){ return this._r }
	get g(){ return this._g }
	get b(){ return this._b };

	/** Default color properties. */ 
	get hue(){ return undefined }
	get brightness(){ return undefined }

	/** Abstract properties. */
	get emotion(){ return undefined }
	get nature(){ return undefined }
	get temperature(){ return undefined }


}