# Variables

Variables in Rust are created with:

1. The `let` keyword
2. The name to use (e.g. `alfa`)
3. The `=` sign
4. The value to bind to it (e.g. `7`)

(We'll expand on this moving foward, but it
covers us for now)

Put that formula togehter looks like this:

```rust, noplayground
let alfa = 7;
```

Here's an example that sets a variable
and then prints it out. (`{alfa}` is
what prints out the variable. We'll
talk about it on the next page)

#### SOURCE CODE

```rust,noplayground,EXAMPLE1
fn main() {
  let alfa = 7;
  println!("The value is {alfa}");
}
```

#### CODE RUNNER

```rust,editable,CODE1

```
