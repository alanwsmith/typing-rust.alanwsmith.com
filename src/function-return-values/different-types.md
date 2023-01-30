# Different Types

Here's another look at the privous function:

```rust, noplayground
fn double_number(value: i32) -> i32 {
  value * 2
}
```

It takes an `i32`:

```rust,noplayground
double_number(value: i32)
```

And returns an `i32`:

```rust,noplayground
-> i32
```

The input type and the output type
don't have to match. In fact, return
values can be sent from functions
that don't receive any arguments.
Here we create a function that
takes no arguments and always
returns `true`.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa = get_true();
  println!("alfa is {}", alfa);

}

fn get_true() -> bool {

  true

}
```

### CODE RUNNER

```rust, editable, CODE1

```
