# Using The Remainder V2

Here's the same thing, but using `4` for
the value on the right side:

The output changes from:

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

To:

```txt
1 <----
2 <----
3 <----
----> 4
5 <----
6 <----
7 <----
----> 8
9 <----
10 <----
```

To this by just chaning the single target number
from `3` to `4`.

### SOURCE CODE

```rust,noplayground EXAMPLE1
fn main() {
  let start = 1;
  let end = 10;
  let target = 4;

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
