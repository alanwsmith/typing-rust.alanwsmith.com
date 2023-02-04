# Takes No Arguments But Has A Return Value

In addition to receiving data, functions can
also return values back to the code
that called them. Difining those functions is
done by adding `->` along what will be send back
behindg the parenthesis after the name. For example

```rust,noplayground
widget() -> String
```

The parts of the function look like this:

1. The `fn` keyword
2. A name
3. An empty set of `()` parenthesis.
4. The `->` symbol followed by what type of data will be returned
5. A set of `{}` curly brackets surrounding the function's code block
