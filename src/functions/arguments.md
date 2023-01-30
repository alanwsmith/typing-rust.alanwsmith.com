# Function Arguments

Functions can receive values from other parts
of the program when they are called.

To do this, Rust needs to know what type of
vaule the function can accept. We
specify that in the `()` parenthesis that
follow the functions name in the definition.

For our example, we'll use:

```rust,noplayground
(value: i32)
```

`value` is a variable name that the
incoming parameter gets bound to inside
the function. That's followed by a `:`
that acts as a separator and then
the type of value the function expects
(`i32` in this case).

To use this, we'll change our function
from:

```rust,noplayground
fn alfa() {
  ...
}
```

To

```rust,noplayground
fn alfa(value: i32) {
  ...
}
```

Sending a value to the function is done
by putting it inside the `()` parenthesis
when after the name of the fuction in the
call.

So this:

```rust,noplayground
alfa();
```

Becomes this when we pass the value `7`
(which is an `i32`)

```rust,noplayground
alfa(7);
```

Here's a full version of the program that
outputs:

```txt
call alfa next
alfa got 7
```

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  println!("call alfa next");
  alfa(7);
}

fn alfa(value: i32) {
  println!("alfa got {value}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
