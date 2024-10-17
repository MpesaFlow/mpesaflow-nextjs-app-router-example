# MpesaFlow NextJS App Router Example

This template repository demonstrates the integration of MpesaFlow with a NextJS application using the App Router. It provides a simple interface for initiating M-Pesa transactions using the MpesaFlow API.

## Features

- NextJS 13+ with App Router
- Server Actions for handling M-Pesa transactions
- Responsive UI with Tailwind CSS
- Toast notifications for transaction feedback
- Environment variable configuration for API keys

## Using This Template

To use this template for your project:

1. Click the "Use this template" button at the top of this repository.
2. Choose a name for your new repository and select where you want to create it.
3. Clone your new repository to your local machine.
4. Follow the installation steps below to set up your project.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm or yarn
- An MpesaFlow account and API key

## Installation

1. After cloning your new repository, navigate to the project directory:
   ```
   cd mpesaflow-nextjs-app-router-example
   ```

2. Install the dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your MpesaFlow API key:
   ```
   MPESAFLOW_API_KEY=your_api_key_here
   ```

## Usage

1. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. Fill in the phone number in the form and submit to initiate a transaction

## Project Structure

```
mpesaflow-nextjs-app-router-example/
├── app/
│   ├── actions.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       └── label.tsx
├── public/
├── .env.local
├── next.config.js
├── package.json
├── README.md
├── LICENSE.md
└── tsconfig.json

```

- `app/`: Contains the main application code, including layouts, pages, and server actions
- `components/`: Reusable React components
- `public/`: Static assets
- `.env.local`: Environment variables (create this file locally)

## Customization

Feel free to modify the components, styles, and functionality to fit your specific needs. The main transaction logic is located in `app/actions.ts`, and the UI is in `app/page.tsx`.

## Environment Variables

- `MPESAFLOW_API_KEY`: Your MpesaFlow API key (required)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Support

If you encounter any issues or have questions, please open an issue in this repository.

## Acknowledgements

- [MpesaFlow](https://mpesaflow.com) for providing the M-Pesa integration API
- [NextJS](https://nextjs.org) for the React framework
- [Tailwind CSS](https://tailwindcss.com) for styling

Happy coding!