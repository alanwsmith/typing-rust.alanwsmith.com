# Booleans

Rust has two other fundamental data types
that hold single values: Booleans and Characters.

A boolean is a value that is either true
or false. It can't be anything else. Boolean
values can be assigned implictly like this:

```rust,noplayground
let alfa = true;
```

Or, explicitly like this:

```rust,noplayground
let bravo: bool = false;
```

Used in a full program it looks like this:

#### SOURCE CODE

```rust,noplayground, EXAMPLE1
fn main() {
  let charlie: bool = true;
  println!("Value {charlie}");
}
```

#### CODE RUNNER

```rust,editable, CODE1

```
