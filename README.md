# Node.js Application

This is a simple Node.js web application using Express.js.

## Project Structure


## Getting Started

### Prerequisites

- Node.js (version 18)
- Docker

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/nodejs-application.git
    cd nodejs-application
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

To start the application, run:
```sh
node [app.js](http://_vscodecontentref_/5)

The server will be running at http://localhost:3000.


Docker
To build and run the Docker container:

Build the Docker image:

docker build -t nodejs-application .

Run the Docker container:

docker run -d -p 3000:3000 nodejs-application

CI/CD
This project uses GitHub Actions for CI/CD. The workflow is defined in .github/workflows/ci.yaml.

Workflow Steps
Checkout the code
Set up Node.js
Run SonarQube scan
Build and push Docker image
Run Trivy vulnerability scan
Deploy the Docker container
Kubernetes
The Kubernetes deployment and service files are located in the kubernetesfile/ directory.

deployment.yaml
service.yaml
