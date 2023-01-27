# Moving String

Trying to do this won't work (via https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html)

```rust, noplayground,
fn main() {

  let alfa = String::from("widget");
  let bravo = alfa;

  println!("alfa {} - bravo {}", alfa, bravo);

}
```

We'll look at the error message on the next page, but for now, here's what will work.

TKTKTK

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa = String::from("widget");
  let bravo = alfa.clone();

  println!("alfa {} - bravo {}", alfa, bravo);

}
```

### CODE RUNNER

```rust, editable, CODE1

```

TODO: Write up how integers can be copied with:

```
let alfa = 7;
let bravo = alfa;
```
