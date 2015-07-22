options( digits = 16 )
library( jsonlite )

sigma = 1
x = 0:24
y = prayleigh( x, sigma )

cat( y, sep = ",\n" )

data = list(
	sigma = sigma,
	data = x,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )