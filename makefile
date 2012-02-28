all: node web test-1


node:
	mesh merge node

web:
	mesh make web


test-1: 
	emailify -i ./examples/$@/index.html -o ./examples/$@/index.out.html -t
