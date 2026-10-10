with open('src/data/portfolioData.ts', 'r') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if 'Yor' in line and 'Diacritizers' in line:
        line = '  title={Are {LLMs} Good Text Diacritizers? An Arabic and Yoruba Case Study},\n'
    new_lines.append(line)

with open('src/data/portfolioData.ts', 'w') as f:
    f.writelines(new_lines)

print("Fixed line 420 successfully!")
