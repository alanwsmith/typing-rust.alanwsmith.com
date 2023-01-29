# The String Type

The `i32` type allows us to drop in a
number on the first side of the `=`
sign with no extra fanfare.

```rust,noplayground
let alfa = ;
```

The `String` type requires more work.
Creating a `String` variable looks like
this:

```rust,noplayground
let alfa = String::from("Hello");
```

String are defined like this:

```rust,noplayground
let alfa = String::from("Hello");
```

With `i32` we could simply drop in the number on
the right side of the `=`, like:

```rust,noplayground
let alfa = 7;
```

the much longer `String::from("Hello")`. The first
word `String` defines the type. Then, `from()` is
where we pass in the piece of text we want to
String to be made of.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa = String::from("Hello");

  println!("alfa is {}", alfa);

}
```

### CODE RUNNER

```rust, editable, CODE1

```
