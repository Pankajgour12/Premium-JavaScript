# JavaScript `this` Keyword --- Complete Notes

## 📌 Definition

`this` is a special keyword in JavaScript that refers to the **execution
context object**.

👉 Simple definition (Interview Ready):

> The value of `this` depends on **how a function is called**, not where
> it is defined.

------------------------------------------------------------------------

# 🧠 Core Rule (Most Important)

✅ `this` is determined at **runtime**\
✅ `this` depends on **call site (invocation)**\
❌ NOT based on where function is written

------------------------------------------------------------------------

# 🌍 1. Global Context

## Browser

``` js
console.log(this);
```

Output:

    window object

Because:

    Global object in browser = window

## Node.js

    Global object = global

------------------------------------------------------------------------

# 🔧 2. Inside Regular Function

``` js
function test(){
  console.log(this);
}

test();
```

### Non-strict mode

    window

### Strict mode

    undefined

📌 Interview Point:

> In strict mode, `this` inside a normal function is undefined.

------------------------------------------------------------------------

# 📦 3. Inside Object Method

``` js
const user = {
  name: "Lotus",
  greet(){
    console.log(this.name);
  }
}

user.greet();
```

Output:

    Lotus

Rule:

    this → object before dot

------------------------------------------------------------------------

# 🏹 4. Arrow Function `this`

Arrow functions **do NOT have their own `this`**.

They inherit from **lexical (parent) scope**.

``` js
const user = {
  name: "Lotus",
  greet: () => {
    console.log(this.name);
  }
}

user.greet();
```

Output:

    undefined

📌 Interview Point:

> Arrow functions use lexical `this`.

------------------------------------------------------------------------

# 🏗 5. Constructor Function

``` js
function Person(name){
  this.name = name;
}

const p = new Person("Lotus");
console.log(p.name);
```

Output:

    Lotus

Rule:

    new → creates new object
    this → new object

------------------------------------------------------------------------

# 🎯 6. call, apply, bind

Used to **manually control `this`**

## call

``` js
function greet(){
  console.log(this.name);
}

const user = { name: "Lotus" };

greet.call(user);
```

## apply

``` js
greet.apply(user);
```

Difference:

    call → arguments list
    apply → arguments array

## bind

``` js
const fn = greet.bind(user);
fn();
```

Bind returns **new function**

------------------------------------------------------------------------

# 🖱 7. Event Listener

``` js
button.addEventListener("click", function(){
  console.log(this);
});
```

Output:

    button element

Arrow version:

``` js
button.addEventListener("click", () => {
  console.log(this);
});
```

Output:

    parent scope this

------------------------------------------------------------------------

# 🧱 8. `this` in Class

``` js
class User{
  constructor(name){
    this.name = name;
  }

  greet(){
    console.log(this.name);
  }
}

const u = new User("Lotus");
u.greet();
```

Here:

    this → instance object

------------------------------------------------------------------------

# ⚠️ 9. Common Mistakes

## Method Losing Context

``` js
const obj = {
  name:"Lotus",
  greet(){
    console.log(this.name);
  }
}

const fn = obj.greet;
fn();
```

Output:

    undefined

Because function lost object reference.

------------------------------------------------------------------------

# ⚠️ Nested Function Problem

``` js
const obj = {
  name:"Lotus",
  greet(){
    function inner(){
      console.log(this.name);
    }
    inner();
  }
}

obj.greet();
```

Output:

    undefined

Fix:

-   arrow function
-   bind
-   self = this

------------------------------------------------------------------------

# 🧠 Interview Tricky Questions

## Q1

``` js
function test(){
  console.log(this);
}
test();
```

Answer: - browser → window - strict → undefined

------------------------------------------------------------------------

## Q2

``` js
const obj = {
  name:"Lotus",
  greet: () => {
    console.log(this.name);
  }
}
obj.greet();
```

Answer:

    undefined

------------------------------------------------------------------------

## Q3

``` js
function Person(name){
  this.name = name;
}

const p = Person("Lotus");
console.log(p);
```

Answer:

    undefined

Because `new` not used.

------------------------------------------------------------------------

## Q4

``` js
const obj = {
  name:"Lotus",
  greet(){
    return function(){
      console.log(this.name);
    }
  }
}

obj.greet()();
```

Answer:

    undefined

------------------------------------------------------------------------

## Q5 (setTimeout trap)

``` js
const obj = {
  name:"Lotus",
  greet(){
    setTimeout(function(){
      console.log(this.name);
    },1000);
  }
}
obj.greet();
```

Fix:

``` js
setTimeout(() => {
  console.log(this.name);
});
```

------------------------------------------------------------------------

# 🧩 Manual bind Implementation (Advanced)

``` js
Function.prototype.myBind = function(context){
  const fn = this;
  return function(...args){
    return fn.apply(context, args);
  }
}
```

------------------------------------------------------------------------

# 🎯 Final Interview Summary

> The value of `this` in JavaScript depends on how a function is
> invoked. In global scope it refers to the global object. In object
> methods it refers to the object. In constructor functions it refers to
> the instance. Arrow functions inherit `this` lexically. The call,
> apply, and bind methods allow explicit control of `this`.

------------------------------------------------------------------------

# 🔥 Golden Rule

    this depends on CALL SITE
    not on where function is defined
