# Carthagine o1 comparison

This directory contains the output of OpenAI o1 given an image of the Figma
design used for the [Carthagine c1 showcase](../README.md), and a prompt asking
it to create a production-ready, fully-featured and pixel perfect React code,
including a full component hierarchy.

This type of approach forms the basis of a large number of Figma -> React tools
on the market.

To view the UI in action, run `npm install`, then `npm run dev`.

Here's how it looks:

![Screenshot of the generated design](../docs/o1-screenshot.jpg)

## Discussion

While the zero-shot understanding of UIs from images continues to amaze us in
frontier models (and is indeed the foundation on which Carthagine was built on
in the first place), their precision leaves a lot to be desired. In this case, o1
uses very approximate colors, spacings, and fonts, and reorders and leaves out
various UI elements from the original design.

The resulting code provides a good starting point, but a frontend engineer using
the Figma as a reference would still need to adjust many, many styles in order to
reach parity with the design.

In terms of functionality, its approach remains conservative no matter how we
try to prompt it to be more extensive. In particular, a lot of events and
handlers are missing, functionality is not implemented, and the data model is
only superficially understood (for example, the Project -> Task one-to-many
relation is not encoded anywhere).
