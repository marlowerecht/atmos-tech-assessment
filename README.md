# Atmos Take-Home Assessment

Hello there! 👋

Thanks for taking the time to complete this take-home assessment. We're excited to see what you come up with!

We've provided a basic React app that you can use to get started. It's a simple question sequence that mimics the assessments in our app. We've also provided a starter Prisma schema, the ORM we use in our production codebase.

![Example Image](/image.png)

## 🏗 Architecture

- An `App` component manages the application state and chooses which questions to render.
- A `Question` component renders a question and a Field to answer it.
- A `Field` component renders an input of a particular type. Currently supported are `boolean`, `text`, `number`, and `choice`.
- The `questions.json` file contains the questions and answer option data.

## ⚙️ Setup

```bash
$ git clone https://github.com/atmosimpact/take-home-assessment.git atmos-assessment
$ cd atmos-assessment
$ yarn
$ yarn dev
```

If you'd like, use the `.eslintrc.js` file to configure your editor to use the same linting and formatting rules as the project. ([VS Code Instructions](https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code) (Start from #3))

## 🎯 Tasks

**Backend** _First_, please create a Prisma schema to model the data (both the questions being asked, and individual user's responses (though don't worry about user modeling or auth)) application. This is intentionally left open-ended, so feel free to model it however you'd like. (You can use the `schema.prisma` file as a starting point, if you'd like.) _This is a required task._

**Frontend** _Next_, _within two hours_, please complete as many as possible of the following tasks. They aren't in any particular order, so feel free to tackle them in any order you like. They vary in difficulty, so don't feel like you have to do them all. _Please check off the specific tasks you choose to complete prior to submitting._

- [ ] Animate the progress bar without adding new dependencies (using TailwindCSS is preferred).
- [ ] Debounce the `save()` function in the App component to avoid unnecessary re-renders and API calls. (Avoid adding a new dependency if possible.)
- [ ] Implement a `multiple` question type allowing multiple fields of varying types on one `Question` component.
- [ ] Implement a conditional-sequence feature that sets the next question based on current responses. (Don't worry if you can't finish this one—we're interested in your thought process!)
- [ ] Improve the project's test coverage. (Bonus points for fixing any bugs you find!)
- [ ] Add a `PercentageField` component for inputting percentage values. Validate input (0-100) using Formik and Yup (optional).

## 📋 Evaluation Criteria

- **Code Quality**: Clean, readable code is the key! We prefer comprehensibility over conciseness.
- **Testing**: Focus on tests covering core functionality. We're not after 100% coverage—prioritize demonstrating your testing skills.
- **Creativity**: Show us interesting, creative solutions, while maintaining code quality.
- **Communication**: Be clear and concise when explaining your thought process and decision-making.

## 🚀 Submission

Fork this repo and submit a link to a private repo with your solution. (Keeping the existing commit history earns bonus points!) If you have any questions, don't hesitate to contact us at [wade@atmos.ai](mailto:wade@atmos.ai). We're here to help!
