# Operators

We used `<` to check if one number was
less than another like this:

```rust,noplayground
if 1 < 2 {
  println!("1 is less than 2");
}
```

The `<` is called an "operator". It
performs a comparison operation and give
us a result.

The `<` looks the same way you see it
in everyday math. Some of the other
comparison operators look a little different:

| Operator | Description              |
| -------- | ------------------------ |
| <        | Less than                |
| <=       | Less than or equal to    |
| >        | Greater than             |
| >=       | Greater than or equal to |
| ==       | Equal to                 |
| !=       | Not equal to             |

Here's what using `==` to check if two
numbers have the same value looks like:

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  if 7 == 8 {
    println!("They match");
  } else {
    println!("They don't match");
  }

}
```

### CODE RUNNER

```rust, editable, CODE1

```
