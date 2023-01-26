# Using Multiple Parameters

Parameters don't have to be kept independent
when we pass them into a function. For example,
if we use to `i32` integers we can add them
together in a new variable and print it. In
this case we'll use a function named
`do_addition`. The output of the program
will be:

```txt
This is main
do_addition made 8
```

#### SOURCE CODE

```rust,noplayground, EXAMPLE1
fn main() {
  println!("This is main");
  do_addition(3, 5);
}

fn do_addition(alfa: i32, bravo: i32) {
  let sum = alfa + bravo;
  println!("do_addition made {}", sum);
}
```

#### CODE RUNNER

```rust,editable,CODE1

```
