n = int(input('Insira um ano: '))
if n%4 == 0 and n%100!=00 or n%400 == 0:
    print(f'{n} é um ano bissexto.')
else:
    print(f'{n} não é um ano bissexto.')