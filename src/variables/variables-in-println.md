# Variables In println!

In Rust, the name of the string inside
`println!()` is a format string. In addition
to outputting basic text (e.g. "Hello, World"),
it can also output the value of variables. That's
done by wrapping the name of the variable inside
`{` and `}` curly brackets.

Here's the code from the prior page.

```rust,noplayground
fn main() {
  let alfa = 7;
  println!("Alfa {alfa}");
}
```

We use the `{VARAIBLE_NAME}` functionality with
the `alfa` variable to come up with the format string

```txt
Alfa {alfa}
```

Since we bould `alfa` to the number `7`, when we
run our program, we get:

```txt
Alfa 7
```
