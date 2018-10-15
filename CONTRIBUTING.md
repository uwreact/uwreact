# Contributing Guide

The University of Waterloo Robotics Engineering and Autonomous Controls Team (UW REACT) is a student design team composed primarily of undergraduate students at the University of Waterloo. We design, manufacture, program, and train fully autonomous FIRST Robotics Competition (FRC) robots. We field a new robot each year to compete against high school FRC teams without using a human driver.

## Getting Started

There are two ways to contribute to our projects:

- **Joining our team**
- **Solving Issues**

### Good First Issues

If you're not sure where to start, we maintain a list of [good first issues](https://github.com/uwreact/shire/labels/good%20first%20issue) with a limited scope that will introduce you to this project.

## Setup

These instructions will set up your local machine for developing, testing, and deploying the project.

### Prerequisites

Install [Yarn](https://yarnpkg.com/en/) on your machine. 

Create a project on [Firebase](https://firebase.google.com/) and copy the configuration variables into `merry/.env.development`.

Create an application on the [Microsoft Application Registration Portal](https://apps.dev.microsoft.com/portal/register-app) and copy the ID into `pippin/.env.developmnent`

### Installation

Install dependencies using yarn:

```bash
yarn
```

### Development

Start the application with webpack development server:

```bash
cd merry
yarn start
```

### Testing

Test the application with jest

```bash
cd [merry/pippin]
yarn test
```

### Deployment

Modify `[merry/pippin]/package.json` to include your Firebase project,
then deploy the application to your Firebase project

```bash
cd [merry/pippin]
yarn test
```
