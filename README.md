
# Front-End Developer Task

This project is a mini-application developed as part of the Front-End Developer Role task. It includes basic UI components and functionality using React, TypeScript, Redux, and Tailwind CSS.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/RichardNk24/react-typescript-test.git
   cd react-typescript-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Components

- **RadioButtons**: A set of radio buttons allowing the user to select an option.
- **DiscountCode**: A text box for entering a discount code with basic validation and a button to generate a mock discount code.
- **NoteField**: A text area for users to enter notes.

## Assumptions

- The discount code pattern is "DISCOUNT2024".
- The generated discount codes are random alphanumeric strings of 10 characters.

## Decisions

- **State Management**: Decided to use Redux for state management to handle the state of radio buttons and notes, ensuring a scalable and maintainable state architecture.
- **UI Styling**: Utilized Tailwind CSS for styling to ensure a responsive and modern UI, leveraging utility-first CSS for quick and efficient design implementation.
- **Component Design**: Created individual, reusable components for each feature (RadioButtons, DiscountCode, NoteField) to maintain a modular and clean codebase.
- **Validation Logic**: Implemented a simple validation logic for the discount code to demonstrate basic form validation techniques.
- **Random Code Generation**: Added a random code generation feature to enhance the interactivity and functionality of the discount code component.
- **Accessibility Considerations**: Ensured focus states and keyboard accessibility to improve the overall user experience and accessibility of the application.

## Contact

For any queries, please contact me at richardsobelnkulu@gmail.com