# panic!() Errors

A `panic!()` happens when the program tries 
to do something it's not capable of and 
doesn't have a mechanism to recover from. 

For example, manually trying to access 
an index location of a `Vec` that doesn't
exist causes a panic. 

So when you try to do this:

```rust
fn main() {
  let alfa = vec![
    String::from("apple"),
    String::from("berry")
  ];

  let bravo = &alfa[100];
  println!("bravo is {bravo}");
}
```

The program panics and dumps this to the output:


```rust, noplayground
   Compiling playground v0.0.1 (/playground)
    Finished dev [unoptimized + debuginfo] target(s) in 1.44s
     Running `target/debug/playground`
thread 'main' panicked at 'index out of bounds: the len is 2 but the index is 100', src/main.rs:7:16
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

These errors are different than the ones weve been getting 
so far. Our earlier programs weren't able to compile at all 
so there was no danger of shipping the program because the
compiler wouldn't allow it to be built. With `panic!()` 
errors, the program *is* able to complie and make the 
acutal program file. So, it's possible to ship a program
with a `panic!()` bug in it. 
