def first_unique_character(word):
    count_character = {}
    for character in word:
        count_character[character] = count_character.get(character, 0) +1
    for i, character in enumerate(word):
        if count_character[character]==1:
            return i
    return -1
print(first_unique_character("amor"))

print(first_unique_character("cocada"))