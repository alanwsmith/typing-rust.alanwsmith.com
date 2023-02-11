# Welcome to Typing Rust

---

_NOTE: This site is a working draft. All the
pages before DRAFTS in the side navivagtion
are in pretty good shape. The ones after it
are in various stages of in progress_

---

Hi. I'm Alan and I'm building this site to
learn Rust.

The site has traditional pages and code samples
as well as two interactive features. The
first is a "Step By Step" explination
of the code examples. Each step some code
and provides an explination of what's happening.

Here's one with three steps for a program
that print out "Hello, World".

#### Step By Step

<script>
const c = {
  source: `use std::env; 
 
fn main() { 
  let alfa = env::var("HOME"); 
  match alfa { 
    Ok(item) => { 
      println!("got {}", item); 
    } 
    Err(error) => { 
      println!("error {}", error); 
    } 
  } 
}`,

  // Usage (until it's better documented)
  //  highlights: ['h1|3|4|7'],
  //  fullCode: true,
  //   altLines: [
  //   {
  //     line: 5,
  //     text: 'the quick brown fox jumps over the lazy dog',
  //   },
  // ],

  // NOTE: Only one hightlight works per line right now
  sets: [
    {
      fullCode: true,
      coords: [1, 38, 30, 13],
      notes: `<p>This is the full source code example.</p><p>Click through the buttons below to explinations of for each part of the code.</p>`,
    },
    {
      addLines: [1],
      coords: [3, 10, 30],
      notes: `<p>Start by loading <code>std::env</code> which provides Rust programs with access to the Environmental Variables it runs in</p>`,
    },
    {
      addLines: [3, 13],
      coords: [5, 10, 30],
      notes: `<p>Create the <code>main</code> function that Rust uses as the entry point for the program</p>`,
    },
    {
      addLines: [4],
      coords: [6, 10, 30],
      notes: `<p>Create a new immutalbe variable called <code>alfa</code> and bind the value returned by <code>env::var(&quot;HOME&quot;)</code> to it. That value is a <code>Result</code></p>`,
    },
    {
      addLines: [5, 12],
      coords: [7, 10, 30],
      notes: `<p>Begin creating the <code>match</code> expression that we'll use to process the <code>Result</code> value that was returned from <code>env::var(&quot;HOME&quot;)</code></p>`,
    },
    {
      highlights: ['h2, 4, 7, 11', 'h1, 5, 9, 13'],
      coords: [7, 10, 30],
      notes: `<p>Note that the value <code>match</code> is working on come from the <code>alfa</code> variable</p><p>TODO: See if match transfers ownership</p>`,
    },
    {
      addLines: [6, 8],
      coords: [8, 10, 30],
      notes: `<p><code>Result</code> values are <code>enums</code> that can contain either an <code>Ok</code> or a <code>Err</code> value. Here we're creating the first arm of the <code>match</code> expression that handles an <code>Ok</code></p>`,
    },
    {
      addLines: [7],
      coords: [9, 10, 30],
      notes: `<p>When the <code>Result</code> value in <code>alfa</code> contains an <code>Ok</code> the code inside its code block gets executed. In this case we're printing out the value that got passed in via <code>Ok</code></p>`,
    },
    {
      highlights: ['h2, 6, 8, 11', 'h1, 7, 26, 29'],
      coords: [9, 10, 30],
      notes: `<p>Note the <code>item</code> value we're getting came packeged with the <code>Ok</code> from <code>Result</code></p>`,
    },
    {
      addLines: [9, 11],
      coords: [11, 10, 30],
      notes: `<p>Next we create the <code>Err</code> arm for the match expression</p>`,
    },
    {
      addLines: [10],
      coords: [12, 10, 38],
      notes: `<p>Finally we add the code to run if the <code>Result</code> from <code>env::var(&quot;HOME&quot;)</code> is an <code>Err</code></p>`,
    },
    {
      fullCode: true,
      coords: [1, 38, 30, 13],
      notes: `<p>Put togehter, the full program looks like this.</p><p>Note: The output for this prototype contain two hard coded lines. The real version will just have one from the actual program</p>`,
    },
  ],

  output: ['got /Users/alan', 'this is a stub to check two lines of output'],
}
</script>
