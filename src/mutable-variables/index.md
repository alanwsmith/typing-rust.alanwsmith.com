# Mutable Variables

Rust variables are immutalbe by default. That means
you can't change them after they've been set. The
`mut` keyword makes them mutable allowing them
to be changed after they are created.

Here's an example of creating a default (immutable) variable:

<pre class="noplayground language-rust">let alfa = <span style="color: #aaa">String::from("apple");</span></pre>

And this is how to create one using the `mut` keyword
to make it mutable:

<pre class="noplayground language-rust">let <span style="color: #0cd;">mut</span> alfa = <span style="color: #aaa;">String::from("apple");</span></pre>
