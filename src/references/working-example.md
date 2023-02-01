# Working Example

Here's a refined version of our previous example
that didn't work:

```rust,noplayground
fn main() {
  let alfa = String::from("apple");
  let bravo = alfa;

  println!("alfa has {alfa}");
  println!("bravo has {bravo}");
}
```

We can get the code working with a reference
by changing the line

```rust, noplayground
let bravo = alfa;
```

to:

```rust, noplayground
let bravo = &alfa;
```

Here's the full sample which outputs:

```txt
alfa has apple
bravo has apple
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("apple");
  let bravo = &alfa;

  println!("alfa has {alfa}");
  println!("bravo has {bravo}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
