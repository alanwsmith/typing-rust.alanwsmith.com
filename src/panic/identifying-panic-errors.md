# Identifying panic!() Errors

There are two quick ways to tell the difference in the error messages. 
To see them let's look at the output of a program that tries.
to change an immutalbe value:

```rust
fn main() {
  let alfa = String::from("apple");
  println!("alfa is {alfa}");
  alfa = String::from("berry");
  println!("alfa is {alfa}");
}
```

That output looks like this (which will refer to as the
compiling error)

```txt
   Compiling playground v0.0.1 (/playground)
error[E0384]: cannot assign twice to immutable variable `alfa`
 --> src/main.rs:4:3
  |
2 |   let alfa = String::from("apple");
  |       ----
  |       |
  |       first assignment to `alfa`
  |       help: consider making this binding mutable: `mut alfa`
3 |   println!("alfa is {alfa}");
4 |   alfa = String::from("berry");
  |   ^^^^ cannot assign twice to immutable variable

For more information about this error, try `rustc --explain E0384`.
error: could not compile `playground` due to previous error
```

And here's another copy of our `panic!()` error from the the previous 
page (which we'll refer to as the panic error)


```txt
   Compiling playground v0.0.1 (/playground)
    Finished dev [unoptimized + debuginfo] target(s) in 1.44s
     Running `target/debug/playground`
thread 'main' panicked at 'index out of bounds: the len is 2 but the index is 100', src/main.rs:7:16
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

The first way to tell the difference between the compiling and 
panic errors is with the first three lines. Both errors start
of with `Compiling...`. Then the compiling error indicates an
with an error number on the next line (e.g. `error[E0384]`) 
while the panic error shows `Finished...` on line two and
`Running...` on the third line. Those two lines indicate that
the compiler was able to do it's job and start to run the program.

The second way to tell the difference between the two types
of errors is at the end of teh error message. The compiler
error ends with `error: could not compile...` identifies 
the core problem we're discussing. For the panic error, the
next to last line is `thread 'main' panicked at...` with
more text desciging exactly where the panic occurred. 










