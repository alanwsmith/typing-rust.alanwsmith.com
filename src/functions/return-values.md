# Function Return Values

The `widget` function in the previous
examples received a value from `main`
but didn't pass anything back. Setting
up to do that is a matter of defining
the type of data the function will
return. This is done by adding
a `->` and data type after the function
name and associated `()` for the
incoming parameters.

The format without any incoming
parameters that returns an `i32`
integer looks like this:

```rust,noplayground
widget() -> i32
```

Here's what everything looks like in a
program. It will output:

```txt
widget is 10
```


#### SOURCE CODE

```rust,noplayground,EXAMPLE1
fn main() {
  println!("widget is {}", widget());
}

fn widget() -> i32 {
  5 + 5
}
```

#### CODE RUNNER

```rust,editable,CODE1

```
