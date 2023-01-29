# Just The Variable In println!

You still have to use the format string
portion of `println!()` even if you
only want to print the variable. So,
this won't work:

```rust,noplayground
fn main() {

  let charlie = 9;

  println!(charlie);

}
```

But, this will:

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let charlie = 9;

  println!("{}", charlie);

}
```

### CODE RUNNER

```rust, editable, CODE1

```
