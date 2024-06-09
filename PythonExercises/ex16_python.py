def sum_digits(number):
    if number <=0:
        return -1
    str_number = str(number)
    value = sum(int(digits) for digits in str_number)
    return value
print(sum_digits(235))

print(sum_digits(121))

print(sum_digits(000))
