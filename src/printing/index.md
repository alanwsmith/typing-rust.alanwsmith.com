# Printing Variables

Most examples on the site print something.
We'll do that using `println!()`.

`println!()` uses what are called "format
strings" as templates for output. Putting
the name of a variable inside `{}` curly brackets
in a format string outputs its value. For example,
if we have a variable named `alfa` we can print
it like this:

```rust, noplayground
println!("alfa is {alfa}");
```
