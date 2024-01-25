def par_e_impar(lista):
    count_even = 0
    count_odd = 0
    for number in lista:
        if number%2 == 0:
            count_even += 1
        else:
            count_odd += 1
    return f'{count_even} pares, {count_odd} ímpares'
print(par_e_impar([3,8,112,55,22,11,16,29,4]))