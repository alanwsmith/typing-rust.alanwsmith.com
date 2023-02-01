# Multiple References

Variables are immutalbe by default. So are
references. One benefit of that since we
can be sure they won't change we can add
as many references as we like.

Here's an illustration using two new
variables `charlie` and `delta` that
reference the original `alfa` value.

![References Illustration](/images/references-3.png)

And here's the code showing it working. It
outputs:

```txt
alfa has apple
bravo has apple
charlie has apple
delta has apple
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("apple");
  let bravo = &alfa;
  let charlie = &alfa;
  let delta = &alfa;

  println!("alfa has {alfa}");
  println!("bravo has {bravo}");
  println!("charlie has {charlie}");
  println!("delta has {delta}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
