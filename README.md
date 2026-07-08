# Progressbar Redesign [QBCore] ┃ M-Westy 

<img width="502" height="159" alt="3414690E-B9C2-48DF-A330-973976E6DB85" src="https://github.com/user-attachments/assets/e0bb67dd-7ab1-42e1-b681-b1bb97311eb1" />


[Português](#português) | [English](#english)

---

## Português

Progressbar Redesign personalizada da versão original do QB-Core.

### 🎨 Diferenças Visuais

*   **Layout Segmentado**: Substituição da barra contínua original por um layout moderno de 5 segmentos.
*   **Cores e Efeitos**: Utiliza azul marinho (`#042940`) para o fundo e verde limão (`#9FC131`) para o progresso, com um brilho suave nos segmentos ativos.
*   **Ícone Octogonal**: Adicionado um badge em formato de octógono à esquerda contendo um ícone de loading giratório.
*   **Tipografia**: Utiliza a fonte "Poppins" do Google Fonts com uma linha de destaque abaixo do texto.

### ⚡ Melhorias de Desempenho

*   **Cache de Controles**: Em vez de percorrer tabelas complexas a cada frame, os IDs dos controles são salvos em uma lista simples quando a ação começa.
*   **Fusão de Threads**: Mesclou as duas threads (verificação de teclas e bloqueio de controles) em um único loop unificado (`Wait(0)`) para reduzir o uso de CPU.

---

## English

Custom progress bar redesign based on the original QB-Core version.

### 🎨 Visual Differences

*   **Segmented Layout**: Replaced the original single continuous bar with a modern 5-segment layout.
*   **Colors & Effects**: Uses Navy (`#042940`) for background and Lime Green (`#9FC131`) for progress, with a subtle glow effect on active segments.
*   **Octagon Icon**: Added a custom octagon-shaped badge on the left containing a spinning loading icon.
*   **Typography**: Uses "Poppins" from Google Fonts with a clean bottom accent line under the label.

### ⚡ Performance Improvements

*   **Cached Control Disabling**: Instead of checking and looping over tables every single frame, control IDs are cached in a simple flat list once the action starts.
*   **Thread Merging**: Merged the dual threads (input checker and control disabler) into a single, unified game loop (`Wait(0)`) to reduce CPU usage.


### ➤ Acesse agora: https://discord.gg/pV4cqzxJNg .

### Redesign desenvolvido por M-Westy © 2026. Todos os direitos reservados.
### Redesign developed by M-Westy © 2026. All rights reserved.


## Créditos
Este projeto é um redesign visual e otimização do recurso original do ecossistema [QB-Core Framework](https://github.com/qbcore-framework).
*   Recurso original: [qb-progressbar](https://github.com/qbcore-framework/progressbar)

## Credits
This project is a visual redesign and performance optimization of the original resource from the [QB-Core Framework](https://github.com/qbcore-framework) ecosystem.
*   Original resource: [qb-progressbar](https://github.com/qbcore-framework/progressbar)
