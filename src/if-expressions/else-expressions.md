# else Expressions

The value of a condition in an `if` expression
must be either `true` or `false`. If the
condition's value is `true` the code block
gets executed. If the condition is `false`
it doesn't.

Executing an alternate code block when an `if`
condition is `false` is done with an `else`
expression.

This example sets up an `if` statements that
runs if 5 is less than 4. We'll follow it with
an `else` expression that will get run since
evaluating `5 < 4` is `false`

The output will be:

```txt
5 is not less than 4
```

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  if 5 < 4 {
    println!("5 is less than 4");
  } else {
    println!("5 is not less than 4");
  }

}
```

#### CODE RUNNER

```rust, editable, CODE1

```
