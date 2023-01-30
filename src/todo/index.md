# TODO List

## Stream

- Add a `Type the Source Code here` placeholder to
  the Code Runners that disppars when they take focus

- Move the run button below the Code Runners

- Add spacing to the code lines so you don't have to
  put spacer lines between all of them.

- Add a button to copy the text automatically, maybe
  you could make that the thing where when you click in
  you click inside for copy the text or type the text.
  (because you have to click in anyway unless you tab
  in so you should handle tabbing in too)

- Add styles to `txt` code fences.

- Turn off whatever is overriding the default scroll bars.

- See if you can turn off whatever is making the TOC
  sidebar nav jump to center the items so that it stays
  with where you had it. (Probably requrie setting a cookie
  and reading it?)

## Other

- Is it possible to make the book dynamic in some
  way, even if it's just manually. Like a setting where
  you can select if you've got any programming experience
  or not and if not you get extra text and maybe some
  variations in the main text.

- What if there was a spaced repetition thing
  built into the site with programs to run that helped
  work on the parts you weren't as sure about.
- Put in fun things to do and see for the different
  parts that you go through as options?
- What if there were different versions of the book
  with different exmample variable names (e.g. if you
  want to have animals, or colors, or nato alphabet)
  Or, maybe not different versions, but like settings
  so you could control things.
- Maybe don't use anything that's stored on the
  stack for the first part of the book? Introduce
  String and Vec instead of string literals and arrays.
  That way you don't have to talk about what has to
  be borrowed and what doesn't require it.
- Add note about how things can move to differnt lines
  and still be the same expression or statement.
- Add something so if you hit the run button
  when there's nothing in the code running it asks
  you if you want to type stuff in or copy it directly?
- Add a button or link to copy the source code
  into the code runner directly. (do that in addtion to the
  run check to make sure there's code in the code editor)
- Make an early example of doing `2+2`
  in the variables chapter.
- Figure out where to put Statements
  and Expressions.
- Scope
- Comments
- Rust does not try to convert non-boolean types to booleans
- String literals
- Come up with some example programs to use
  as full examples at the end of each section.
- Talk about the Rust Prelude: https://doc.rust-lang.org/std/prelude/index.html
- Talkd about the Rust editions
- Talk about the `&str` slice type.
- Talk about derived traits.
- Talk about how structs and enums are keys to stuff.

---

Put in a note about if you get this error it
probably means you didn't put code in the code runner:

```rust
   Compiling playground v0.0.1 (/playground)
error[E0601]: `main` function not found in crate `playground`
  |
  = note: consider adding a `main` function to `src/main.rs`

For more information about this error, try `rustc --explain E0601`.
error: could not compile `playground` due to previous error
```

---

Comman error:

Compiling playground v0.0.1 (/playground)
error[E0615]: attempted to take value of method `do_output` on type `Widget`
--> src/main.rs:15:9
|
15 | thing.do_output;
| ^^^^^^^^^ method, not a field
|
help: use parentheses to call the method
|
15 | thing.do_output();
| ++

For more information about this error, try `rustc --explain E0615`.
error: could not compile `playground` due to previous error

---

Using `()` instead of `{}`

Compiling playground v0.0.1 (/playground)
error: expected identifier, found keyword `true`
--> src/main.rs:16:28
|
16 | let thing = Widget(alfa: true);
| ^^^^ expected identifier, found keyword
|
help: escape `true` to use it as an identifier
|
16 | let thing = Widget(alfa: r#true);
| ++

error: invalid `struct` delimiters or `fn` call arguments
--> src/main.rs:16:15
|
16 | let thing = Widget(alfa: true);
| ^^^^^^^^^^^^^^^^^^
|
help: if `Widget` is a struct, use braces as delimiters
|
16 | let thing = Widget { alfa: true };
| ~ ~
help: if `Widget` is a function, use the arguments directly
|
16 - let thing = Widget(alfa: true);
16 + let thing = Widget(true);
|

error[E0070]: invalid left-hand side of assignment
--> src/main.rs:8:16
|
8 | &self.alfa = false
| ---------- ^
| |
| cannot assign to this expression

For more information about this error, try `rustc --explain E0070`.
error: could not compile `playground` due to 3 previous errors
