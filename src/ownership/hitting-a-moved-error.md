# Hitting A Moved Error

Where things go wrong is if we try to
access `alfa` again. Values can only
have one owner. When we moved our `String`
to `bravo` it removed ownership from
`alfa`. That means `alfa` can't work with it
anymore.

Updating our illustration looks like this:

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
  println!("alfa has {alfa}");

  let bravo = alfa;
  println!("bravo has {bravo}");

  println!("alfa has {alfa}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
