all: test-1


test-1: 
	emailify -i ./examples/$@/index.html -o ./examples/$@/index.out.html -t
