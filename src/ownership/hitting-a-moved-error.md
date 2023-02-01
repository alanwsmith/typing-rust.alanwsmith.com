# Hitting A Moved Error

Where things go wrong is if we try to
use `alfa` again. Values can only
have one owner. When we did `let bravo = alfa;`
it transferred ownership of the `String` from
`alfa` to `bravo`.

Without ownership, `alfa` can't work with the
`String` any more`

Trying to use it looks like this:

![Ownership 8](/images/ownership-8.png)

Here's the full example of the code where
we try to access `alfa` with this line

```rust, noplayground
println!("alfa has {alfa}");
```

Since the `String` was moved to `bravo`
we get an error that we'll discuss next.

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("apple");
  let bravo = alfa;

  println!("alfa has {alfa}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
