# Using The Remainder

The `%` remainder operator is surprigingly useful
in combination with the comparison operators. One
example is using it to divide content into
groups.

For exmaple, if we use `%` with an incrementing
number on the left side and `3` on the right side
it will return zero for everything that's
divisible by three with no remainder. If we
run a comparison against that value in an
if statement we can process every third value
differently.

Take this code for example that outputs:

```txt
1 <----
2 <----
----> 3
4 <----
5 <----
----> 6
7 <----
8 <----
----> 9
10 <----
```

### SOURCE CODE

```rust,noplayground, EXAMPLE1
fn main() {
  let start = 1;
  let end = 10;
  let target = 3;

  for alfa in start..=end {
    if alfa % target == 0 {
      println!("----> {alfa}")
    } else {
      println!("{alfa} <----")
    }
  }
}
```

### CODE RUNNER

```rust, editable, CODE1

```
