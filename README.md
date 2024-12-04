# RxJS Utilities

A collection of utility functions for RxJS, including the **`fromElement`** operator, which simplifies handling DOM events with **RxJS** in a type-safe and reusable manner. 
This project includes examples of how to use the operator with different HTML elements and event types.
The custom operator 'fromElement' created with the help of **ChatGPT o1 canvas**

## Features

- **`fromElement`**: A generic RxJS operator to handle DOM events and pluck properties from event targets, with support for multiple event types and payloads.
- **Event Filtering**: Efficient filtering of events based on element properties, event type, or custom logic.
- **Event Payload Handling**: Handles different types of event payloads (e.g., `MouseEvent`, `KeyboardEvent`, `Event`).

## Setup

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/hansschenker/rxjs-utilities.git
cd rxjs-utilities
npm install
