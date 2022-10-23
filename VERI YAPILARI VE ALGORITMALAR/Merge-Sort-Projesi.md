# Merge Sort Projesi
`[16,21,11,8,12,22]` -> Merge Sort
1. Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
 

```
                [16,21,11,8,12,22] 

[Not:] Sıralı olmayan diziyi ortadan eşit olarak iki alt diziye ayırır.   

              [16,21,11] | [8,12,22]     (Divide 1)

[Not:]  Bu ayırma işlemi, alt diziler en çok iki elemanlı olana kadar devam eder.

           [16,21]  [11] | [8,12] [22]   (Divide 2)

[Not:]  Alt dizileri kendi içinde sıralar.

          [16] [21] [11] | [8] [12] [22] (Divide 3)

[Not:]  Sıralı iki alt diziyi tek bir sıralı dizi olacak şekilde birleştirir. 

           [16,21]  [11] | [8,12] [22]   (Merge 1)  

              [11,16,21] | [8,12,22]     (Merge 2) 

                [8,11,12,16,21,22]       (Merge 3) 
```

2. Big-O gösterimini yazınız.
    * O(nlogn)

>NOT: Insertion sort'da, time complexity n^2 olduğundan ötürü çalışma zamanımız artıyordu. Merge sort'da ise nlogn olduğu için açık ara performans olarak daha iyi diyebiliriz.