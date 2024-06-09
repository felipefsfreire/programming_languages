def top_students(list):
    avg_class = sum(student["nota"] for student in list)/len(list)
    top_students = [student["nome"] for student in list if student["nota"]>= avg_class]
    return top_students

students1 = [{"nome": "Maria", "nota": 7}, {"nome": "Marta", "nota": 5}, {"nome": "Marcia", "nota": 5.5}]
print(top_students(students1))

students2 = [{"nome": "Joao", "nota": 7}, {"nome": "Lucas", "nota": 5}, {"nome": "Maria", "nota": 0}, {"nome": "Marcia", "nota": 5.5}]
print(top_students(students2))