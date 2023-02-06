# Result Type

The Result type is used to return values.
It can contain either and `Ok` or an
`Err`. The basic signature is:

```rust,noplayground
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

The `T` stands for `type`, and `E` stands for
`error`. Those are generic types which means
that we can put any type in the slot. The
first `T` and `E` in `Result<T, E>` setup
the result of enum to be able to use them
(TODO: write up generic types before this)

The `Ok(T)` turns into whatever type
the process that made it needs to send.

For example, the code below is used
to get the string value from an
Environmental Variable. But, the string
doesn't come in directly. Instead
the `env::var` returns a `Result` that
contains either `Ok(String)` or
`Err(VarError)`.

So, to get to the string we have to
examine the `Result` with `match`
to see if it contains `Ok` or `Err`

Here's an example

```rust
use std::env;

let key = "HOMEx";
let returnValueAsResult = env::var(key);

match returnValueAsResult {
    Ok(value) => {
      println!("{} is {}", key, value);
    }
    Err(error) => {
      println!("{} - {}", key, error);
    }
}
```

```rust
use std::env;

let key = "NON_EXISTANT_KEY";
match env::var(key) {
    Ok(val) => println!("{key}: {val:?}"),
    Err(e) => println!("couldn't interpret {key}: {e}"),
}
```
