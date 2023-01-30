# With Variables

We can also use variables for the
starting and ending numbers of the
range. Instead of:

```rust,noplayground
1..=5
```

We set `start` and `end` variables then
use them with:

```rust,noplayground
start..=end
```

Here's the updated version that also outputs:

```txt
alfa is 1
alfa is 2
alfa is 3
alfa is 4
alfa is 5
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let start = 1;
  let end = 5;

  for alfa in start..=end {
    println!("alfa is {alfa}");
  }

}
```

### CODE RUNNER

```rust, editable, CODE1

```
