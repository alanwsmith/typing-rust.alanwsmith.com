# Moving Error Details

TKTKTKT - Write up the details of
this error.

This is the error.

```rust, noplayground
   Compiling playground v0.0.1 (/playground)
error[E0382]: borrow of moved value: `alfa`
 --> src/main.rs:8:23
  |
2 |   let alfa = String::from("apple");
  |       ---- move occurs because `alfa` has type `String`, which does not implement the `Copy` trait
...
5 |   let bravo = alfa;
  |               ---- value moved here
...
8 |   println!("alfa has {alfa}");
  |                       ^^^^ value borrowed here after move
  |
  = note: this error originates in the macro `$crate::format_args_nl` which comes from the expansion of the macro `println` (in Nightly builds, run with -Z macro-backtrace for more info)
help: consider cloning the value if the performance cost is acceptable
  |
5 |   let bravo = alfa.clone();
  |                   ++++++++

For more information about this error, try `rustc --explain E0382`.
error: could not compile `playground` due to previous error
```
