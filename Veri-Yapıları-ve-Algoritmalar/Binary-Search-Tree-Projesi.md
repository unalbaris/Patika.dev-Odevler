# Binary Search Tree Projesi
`[7, 5, 1, 8, 3, 6, 0, 9, 4, 2]` dizisinin Binary-Search-Tree aşamalarını yazınız.
```
                6
		      /   \
		     5     7
		    /       \
		   1         8
		  / \         \
		 0   3         9
            / \  
           2   4   
```


>Adımlar
>- 6'yı seçtik. Diziden sayıları alalım.
>- 7; 6 'dan büyük sağına koyuyoruz.
>- 5; 6 'dan küçük soluna koyuyoruz.
>- 1; 6 ve 5 'ten küçük. 5 'in soluna koyuyoruz.
>- 8; 6 ve 7 'den büyük. 7 'nin sağına koyuyoruz. 
>- 3; 6 ve 5 'ten küçük 1 'den büyük. 1 'in sağına koyuyoruz.
>- 0; 6, 5 ve 1 'ten küçük. 1 'in soluna koyuyoruz.
>- 9; 6, 7 ve 8 'den küçük. 8 'in sağına koyuyoruz.
>- 4; 6 ve 5 'ten küçük, 1 ve 3 'ten büyük. 3'ün sağına koyuyoruz.
>- 2; 6, 5 ve 3'ten küçük, 1 'den büyük. 3'ün soluna koyuyoruz.