lista = [1,2,3,4,5,6,7,8,9,10] ## outra opção para criar a lista [nome_variável = list(range(1, 11))]
for par in lista:
    if par%2==0:
        print(par)