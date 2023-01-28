# Variables

Variables in Rust are created using the following
structure:

1. The `let` keyword
2. A name for the variable (e.g. `alfa`)
3. A `:` that acts as a separator
4. A data type
5. The `=` sign
6. The value to bind to it (e.g. `7`)
7. A `;` the ends the definition

The data type from item 4 tells rust what
kind of content the variable can hold. For example,
it might be a number, or a letter, or full
sentence. We'll dig into data types in the
next chapter. We'll use `i32` (which
stands for a number) until we get there.

Putting it all together we get this:

```rust, noplayground
let alfa: i32 = 7;
```

Using that line in we can create
a full program that defines the `alfa`
variable then prints it out.

#### SOURCE CODE

```rust,noplayground,EXAMPLE1
fn main() {

  let alfa: i32 = 7;

  println!("The value is {}", alfa);

}
```

#### CODE RUNNER

```rust,editable,CODE1

```
