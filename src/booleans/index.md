# Booleans

Now that we've seen some uses of `i32`
we'll add another data type: `bool`

The `bool` data type stands for boolean.
A boolean value can be either `true` or
`false`. It can't be anything else.

We can use booleans in a while loop.
For example:

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let mut alfa = true;
  let mut counter = 1;

  while alfa == true {

    println!("counter is {}", counter);
    if counter == 5 {
      alfa = false;
    }
    counter = counter + 1;

  }

}
```

### CODE RUNNER

```rust, editable, CODE1

```
