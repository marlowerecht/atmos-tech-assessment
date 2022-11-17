# Atmos React Take-Home Assessment

Hello there!

Thanks for taking the time to complete this take-home assessment. We're excited to see what you come up with! 

We've provided a basic React app that you can use to get started. It's a simple question sequence that mimics the assessments in our app.

![Example Image](/image.png)

## Architecture
- An `App` component manages the application state and chooses which questions to render.
- A `Question` component renders a question and a Field to answer it.
- A `Field` component renders an input of a particular type. Currently supported are `boolean`, `text`, `number`, and `choice`.
- The `questions.json` file contains the questions and answer option data.

## Setup
```bash
$ git clone ...
$ cd question-sequence-poc
$ yarn
$ yarn dev
```

## Your Tasks
*Within two hours*, please complete as many as possible of the following tasks. They aren't in any particular order, so feel free to tackle them in any order you like. They vary in difficulty, so don't feel like you have to do them all. (Please check off the specific tasks you choose to complete.)

- [ ] Animate the progress bar, without adding a new dependency.
- [ ] Debounce the `save()` function in the App component to avoid unnecessary re-renders and API calls.
- [ ] Implement a `multiple` question type that allows multiple fields of varying types on a single `Question` component.
- [ ] Implement a conditional-sequence feature that allows conditionally setting the next question based on responses to the current.
- [ ] The test coverage for this project is pretty low. Add tests to improve it. (Bonus: fix any bugs you find!)
- [ ] Add a `PercentageField` that allows the user to enter a percentage value. Validate that the value is between 0 and 100 with Formik (and Yup, if you'd like).

## What We're Looking For
- **Code Quality**: We're looking for clean, readable code that's easy to understand. We're not looking for the most concise solution, but rather one that's easy to understand and maintain. Solutions shouldn't cause any eslint errors or warnings. (An ignore is ok here and there, but should be avoided except where it would comprise the solution or another factor here.)
- **Testing**: We're looking for tests that cover the core functionality of the app. We're not looking for 100% coverage, but rather a few tests that demonstrate your ability to write tests.
- **Creativity**: We're looking for creative solutions to the problems. We're not looking for the most obvious solution, but rather one that demonstrates your ability to think outside the box. (This should not come at the expense of code quality, though.)
- **Communication**: We're looking for clear, concise communication. We're not looking for a novel, but rather a few sentences that clearly explain your thought process and the decisions you made.

## Submission
Please submit your solution as a link to a private GitHub repo (preferred) or a zip file. If you have any questions, please feel free to reach back out to us. We're happy to help!
