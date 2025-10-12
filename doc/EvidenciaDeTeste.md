## Utilizei o W3C Validator, o uníco erro encontrado foi a parte de Libras, onde há um indevido uso de Divs.


```html
Error: Attribute vw not allowed on element div at this point.

From line 165, column 5; to line 165, column 28

ter>↩↩    <div vw class="enabled">↩     

Attributes for element div:
Global attributes
Error: Attribute vw-access-button not allowed on element div at this point.

From line 166, column 9; to line 166, column 45

>↩        <div vw-access-button class="active"></div>

Attributes for element div:
Global attributes
Error: Attribute vw-plugin-wrapper not allowed on element div at this point.

From line 167, column 9; to line 167, column 31

>↩        <div vw-plugin-wrapper>↩     

Attributes for element div:
Global attributes
```

O resto do HTML passou pelo validator, sem erros, a libra, mesmo tendo um erro, funciona, não é o recomendado, mas não afeta a funcionalidade. E é provavel que manipulação do plugin libras pode resultar no plugin em parar de funcionar, então genuinamente é melhor não tocar.