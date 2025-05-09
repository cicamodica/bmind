## Boas práticas na padronização da documentação:

Linguagem padrão para o .html no nosso projeto: lang="pt-BR"

### Nomes de diretórios e arquivos (folders e files): 

Geralmente usa-se letras minúsculas (Evita problemas em servidores case-sensitive (como Linux)), sem acentos ou caracteres especiais (espaço), use hífen (-) e de preferência nomes curtos e descritivos, a linguagem que será usada deve ser definida pelo grupo.

### Elementos HTML (ou Tags HTML) (exemplo: header, div, label, button, input, h1, h6, p etc.): 

Por se tratar de elementos padrão do HTML, é normal e esperado que elas se repitam entre os seus arquivos .html. 

### Atributos HTML (exemplo: class, id, type, name, for, href, src, style etc.): 

Geralmente usa-se letras minúsculas, sem acentos ou caracteres especiais, e de preferência nomes curtos e descritivos, separados por hífen (-), sobre a linguagem usada nas nomeações, deve-se seguir a linguagem padrão do .html (nesse caso, pt-BR): 

- for = “field-description” (evitar: nome em inglês, usaremos lang = “pt-BR”)
- for = “campo-descrição” (evitar: nome em português com acentuação)
- **for = “campo-descricao” (priorizar: nome em português e descritivo)**

### Nomes de classes (HMTL > CSS): 

Use nomes descritivos e padronizados para cada documento .html. Evite nomes genéricos demais como “.a” por exemplo, deve-se seguir a linguagem padrão do .html (nesse caso, pt-BR):

- class="form-input-password" (.form-input-password) (evitar: nome em inglês)
- class="password" (.password) (evitar: nome genérico em inglês)
- class="senha" (.senha) (evitar: nome genérico em português)
- **class="form-entrada-senha" (.form-entrada-senha) (priorizar: nome em português e descritivo)**

### Nomes de funções, constantes, variáveis (JS): 

Em JavaScript, o padrão mais comum e recomendado para nomear funções é o camelCase, onde a primeira palavra é minúscula, as seguintes palavras começam com letra maiúscula e não há espaços, hífens, underlines ou acentuações. A linguagem que será usada deve ser definida pelo grupo (comumente usa-se inglês):

- const form-login (evitar: nome com hífen)
- const form_login (evitar: nome com underline)
- const formlogin (evitar: nome sem espaço e todas as letras minúsculas)
- **const formLogin (priorizar: nome no formato camelCase)**
