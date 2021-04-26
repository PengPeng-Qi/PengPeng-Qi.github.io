---
layout:     post
title:      浅谈Var、Let、Const 的区别
date:       2021-04-26
author:     PengPengQi
header-img: img/BackGround.png
catalog: true
tags:
    - Let
    - Var
    - Const
    - JS
---
## 浅谈Var、Let、Const 的区别

#### 全局变量

Variables declared **Globally** (outside any function) have **Global Scope**.

```js
var carName = "Volvo";

// code here can use carName

function myFunction() {
  // code here can also use carName 
}
```

#### 函数变量

Variables declared **Locally** (inside a function) have **Function Scope**.

```js
// code here can NOT use carName

function myFunction() {
  var carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
```

#### JavaScript 块范围

```js
{ 
  var x = 2; 
}
// x CAN be used here
```

```js
{ 
  let x = 2;
}
// x can NOT be used here
```

```js
var x = 10;
// Here x is 10
{ 
  var x = 2;
  // Here x is 2
}
// Here x is 2
```

```js
var x = 10;
// Here x is 10
{ 
  let x = 2;
  // Here x is 2
}
// Here x is 10
```

```js
var x = 2;         // Allowed
const x = 2;       // Not allowed
{
  let x = 2;     // Allowed
  const x = 2;   // Not allowed
}
```

```js
var x = 10;
// Here x is 10
{ 
  const x = 2;
  // Here x is 2
}
// Here x is 10
```

#### Loop Scope

```js
var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10
```

```js
let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
// Here i is 5
```

#### Function Scope

```js
function myFunction() {
  var carName = "Volvo";   // Function Scope
}
```

```js
function myFunction() {
  let carName = "Volvo";   // Function Scope
}
```

#### Global Scope

```js
var x = 2;       // Global scope

let x = 2;       // Global scope
```

#### Global Variables in HTML

With JavaScript, the global scope is the JavaScript environment. 

In HTML, the global scope is the window object.

Global variables defined with the `var` keyword belong to the window object:

```js
var carName = "Volvo";
// code here can use window.carName
```

Global variables defined with the `let` keyword do not belong to the window object:

```js
let carName = "Volvo";
// code here cannot use window.carName
```

#### Constant Arrays/Objects can Change

```js
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
```

you can NOT reassign a constant array:

```js
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR
```

#### Redeclaring

Redeclaring a JavaScript variable with `var` is allowed anywhere in a program:

```js
var x = 2;

// Now x is 2
 
var x = 3;

// Now x is 3
```

Redeclaring a `var` variable with `let`, in the same scope, or in the same block, is not allowed:

```js
var x = 2;       // Allowed
let x = 3;       // Not allowed

{
  var x = 4;   // Allowed
  let x = 5   // Not allowed
}
```

Redeclaring a `let` variable with `let`, in the same scope, or in the same block, is not allowed:

```js
let x = 2;       // Allowed
let x = 3;       // Not allowed

{
  let x = 4;   // Allowed
  let x = 5;   // Not allowed
}
```

Redeclaring a `let` variable with `var`, in the same scope, or in the same block, is not allowed:

```js
let x = 2;       // Allowed
var x = 3;       // Not allowed

{
  let x = 4;   // Allowed
  var x = 5;   // Not allowed
}
```

```js
// Error
const PI;
PI = 3.14159265359;

// OK
const PI = 3.14159265359;
```

Redeclaring or reassigning an existing `const` variable, in the same scope, or in the same block, is not allowed:

```js
const x = 2;       // Allowed
const x = 3;       // Not allowed
x = 3;             // Not allowed
var x = 3;         // Not allowed
let x = 3;         // Not allowed

{
  const x = 2;   // Allowed
  const x = 3;   // Not allowed
  x = 3;         // Not allowed
  var x = 3;     // Not allowed
  let x = 3;     // Not allowed
}
```

Redeclaring a variable with `let`, in another scope, or in another block, is allowed:

```js
let x = 2;       // Allowed

{
  let x = 3;   // Allowed
}

{
  let x = 4;   // Allowed
}
```

Redeclaring a variable with `Const`, in another scope, or in another block, is allowed:

```js
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}
```

#### Hoisting

```js
// OK
carName = "Volvo";
alert(carName);
var carName;

// Error
carName = "Volvo";
let carName;

// Error
carName = "Volvo";
const carName;
```

#### Summary

`Var`在平级范围内可以重复定义，而`Let`、`Const`不行

`Var`可以使用声明提前、而`Let`、`Const` 则不行

`Var`、`Let`均可以在子级范围内重复定义，但 `Let` `Const`回到父级不生效、`Var`则可以

`Var` 对一个变量定义后 `Let` 、`Const`不可以再次定义，`Let`同理

`Const` 定义的时候必须赋值