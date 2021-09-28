#!/bin/bash
for word in $(cat lista_nomes.txt)
do
	echo "O nome é $word"
done

if [#word = "Peter"]; then
	echo "Encontrei o $word"
else 
	let a=$a+1
fi
