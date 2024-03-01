## O que é o TypeScript

Ref: https://www.typescriptlang.org/play?ssl=8&ssc=40&pln=1&pc=1#code/KYOwrgtgBA4qAmwBOBvAUFTUCyBBAMgKJQC8UA5HkeQDQZYBihVxZ5TL5aAvgNxpoAxgHsQAZwAuUMGOQA5AIYRgALiiSkASxABzUhQBKCgGYLgAG3L8R4qTOS4dqqOAgAjZPoDMANmujJaVkkOBBEJDVQ8P0o5AA6Fn5MIA

- Link para estudar o typeScript

TS:
```typescript
enum Gender{
    MALE = 'MALE',
    FEMALE = 'FEMALE'
};

const userName: string = 'Rafael';
const userAge: number = 36;
const userGender: Gender = Gender.MALE;
```

```javascript
JS:
"use strict";
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
})(Gender || (Gender = {}));
;
const userName = 'Rafael';
const userAge = 36;
const userGender = Gender.MALE;
```