# Incompatible Types

TODO: Build out this page with the error
from the prior page.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
   Compiling playground v0.0.1 (/playground)
error[E0308]: `if` and `else` have incompatible types
 --> src/main.rs:6:5
  |
3 |     let alfa = if 3 <= 4 {
  |  ______________-
4 | |     0
  | |     - expected because of this
5 | |   } else {
6 | |     false
  | |     ^^^^^ expected integer, found `bool`
7 | |   };
  | |___- `if` and `else` have incompatible types

For more information about this error, try `rustc --explain E0308`.
error: could not compile `playground` due to previous error
```

### CODE RUNNER

```rust, editable, CODE1

```
