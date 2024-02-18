n1 = float(input("Digite o primeiro número: " ))
operator = input("Insira o tipo de operação (+, -, * ou /): ")
n2 = float(input("Digite o segundo número: " ))
if operator == "+":
    print(f"{n1} + {n2} =", n1+n2)
elif operator == "-":
    print(f"{n1} - {n2} =", n1-n2)
elif operator == "*":
    print(f"{n1} * {n2} =", n1*n2)
elif operator == "/":
    print(f"{n1} / {n2} =", n1/n2)
