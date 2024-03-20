# Utilizando for
n = int(input('Insira um número: '))
f = 1
for i in range(1,n+1):
    f*=i
print(f'O fatorial de {n} é {f}')

# Utilizando while
n = int(input('Insira um número: '))
x = 1
f = 1
while x<=n:
    f*=x
    x=x+1
print(f'O fatorial de {n} é {f}')