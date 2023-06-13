# Tabela de decisão

- também conhecido como técnicas de teste combinatórias ou tabela de causa e efeito.
- útil para testar regras de negócio com diferentes condições de combinações que levam à resultados diferentes.
- Desvantagens: Quando o número de entradas aumenta a tabela se torna mais complexa.

## Notações comuns
- os valores das condições e ações são geralmente mostrados como valores booleanos.

![image](https://github.com/eduardo1020/curso-qa-ebac/assets/50027537/55b31c7d-69af-48a3-9857-7dac76a3db2f)

Exemplo com login:<br>
![image](https://github.com/eduardo1020/curso-qa-ebac/assets/50027537/f753c765-011d-4590-bc28-be9232d660e0)

- cada regra pode virar um caso de teste.

![image](https://github.com/eduardo1020/curso-qa-ebac/assets/50027537/2ff6deee-a78e-4f19-86f3-9aaaae638563)

## Como gerar Testes

Funcionalidade: Novo cadstro de alunos

*Como* administrador de uma plataforma <br>
*Quero* um novo sistema de cadastro <br>
*Para* registrar novos alunos na plataforma

Regras de negócio: <br>
1 - Apenas alunos entre 16 e 80 anos podem ser cadastrados <br>
2 - Usuários já cadastrados e ativos há mais de 90 dias, apenas confirmar os dados <br>
3 - Permitir cadastro apenas das 9 as 18 horas.

- pessoas matriculadas e maiores de 18 anos ganham um curso de inglês por 3 meses.
![image](https://github.com/eduardo1020/curso-qa-ebac/assets/50027537/41e7e109-a0f3-4423-8cb0-edf022484564)

### Combinando regras de negócio
- RN01 + RN03

![image](https://github.com/eduardo1020/curso-qa-ebac/assets/50027537/459d695d-2ba3-49f8-ab1f-2a6cce91f5ea)
