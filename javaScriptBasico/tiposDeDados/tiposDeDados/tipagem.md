# Tipagem

O JavaScript é uma linguagem fracamente tipada, isso significa que "ele" tentará converter em tempo de execução o dados baseado no valor.

Exemplos:

```javascript

1
1.2
"Rafael"
true
```

Atualmente existem maneiras de "força" o tipo, e até formas de utlizar linguagens / supersets focados nisso como o TypeScript.

Isso é um ponto de atenção importante dentro do JS, já que a depender do valor da variável o seu progrma pode "dar bugs" em função de tipos inesperados. E para isso utilizaremos artifícios como o comparador idêntico.