options( digits = 16 )
library( jsonlite )
library( VGAM )

sigma = 6
x = seq( -1, 100, 0.5 )
y = prayleigh( x, sigma )

cat( y, sep = ",\n" )

data = list(
	sigma = sigma,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/accessor.json" )
