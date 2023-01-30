# Immutable Variables

Our Contional Function program uses four variables:

```rust, noplayground
let alfa = 4;
let bravo = 9;
```

and

```rust, noplayground
let charlie = 7;
let delta = 3;
```

Another approach is to change the values
of `alfa` and `bravo` instead of creating `charlie` and
`delta`. We can do that, but we need to change
the way we create `alfa` and `bravo` first because
Rust variables are `immutalbe` by default. That means
that once we bind a value to them we can't change it.

For example, run this and you'll get an error that
we'll discuss on the next page.

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = 7;
  println!("alfa is {}", alfa);

  alfa = 9;
  println!("alfa is {}", alfa);
}
```

### CODE RUNNER

```rust, editable, CODE1

```
