# URL Shortener

A simple URL shortener application built with Node.js, Express, and MongoDB.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Prerequisites
Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/) installed on your local machine.
- [pnpm](https://pnpm.io/) package manager.

## Installation
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/url-shortener.git
2. Change directory to the project folder:
   cd url-shortener
3. Install project dependencies using pnpm:
   pnpm install

## Usage
1. Start the server:
   pnpm start
2. Use an API testing tool like Postman, Thunder Client, or RapidAPI.
3. Create a short URL by making a POST request to:
   http://localhost:3000/url
   Request body should include a URL: { "url": "your-long-url-here" }
4. You will receive an ID in the response. Use this ID to access the original URL by making a GET request to:
   http://localhost:3000/:shortId

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them.
Push your changes to your fork.
Submit a pull request.


