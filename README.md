# With Docker Compose

This example contains everything needed to get a Next.js development and production environment up and running with Docker Compose.

## Benefits of Docker Compose

- Develop locally without Node.js or TypeScript installed ✨
- Easy to run, consistent development environment across macOS, Windows, and Linux teams
- Run multiple Next.js apps, databases, and other microservices in a single deployment
- Multistage builds combined with [Output Standalone](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files) outputs up to 85% smaller apps (Approximately 110 MB compared to 1 GB with create-next-app)
- Easy configuration with YAML files

## How to use

1. Clone this [repository](https://github.com/DIOLINK/challeng-softvault) to your local machine using SSH or HTTPS with the following commands:

   - #### HTTPS:
      ```shell
      git clone https://github.com/DIOLINK/challeng-softvault.git
      ```

   - #### SSH:
      ```shell
      git clone git@github.com:DIOLINK/challeng-softvault.git
      ```

- Run `cd challeng-softvault`, then run `npm install` or `yarn install` or `pnpm install` to generate a lockfile.

It is recommended to commit a lockfile to version control. Although the example will work without one, build errors are more likely to occur when using the latest version of all dependencies. This way, we're always using a known good configuration to develop and run in production.

## Prerequisites

Install [Docker Desktop](https://docs.docker.com/get-docker) for Mac, Windows, or Linux. Docker Desktop includes Docker Compose as part of the installation.

## Development

First, run the development server:

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create my_network

# Build dev
docker compose -f docker-compose.dev.yml build

# Up dev
docker compose -f docker-compose.dev.yml up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Production

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create my_network

# Build prod
docker compose -f docker-compose.prod.yml build

# Up prod in detached mode
docker compose -f docker-compose.prod.yml up -d
```

Open [http://localhost:3000](http://localhost:3000).

## Useful commands

```bash
# Stop all running containers
docker kill $(docker ps -aq) && docker rm $(docker ps -aq)

# Free space
docker system prune -af --volumes
```
# TODO-challenge

## Plus (Optional)

### Documentation with Storybook

- [x] Install and configure Storybook.
- [x] Create stories for each component.

### Dockerization

- [x] Create a `Dockerfile` for the application.
- [x] Create a `docker-compose.yml` for easier deployment.
- [x] Ensure the application runs correctly in a Docker container.

### Styling with Styled Components or Emotion

- [x] Set up Styled Components or Emotion in the project.
- [x] Apply styles to the components according to the Figma design.
- [x] Ensure a consistent and organized structure for styles.

### Unit Testing with Jest

- [x] Set up Jest in the project.
- [x] Write unit tests for the components.
- [x] Write unit tests for the main application logic.

## Additional Considerations

- [x] Document any relevant technical decisions in the README.
- [x] Include clear instructions on how to set up and run the project.

## Delivery

- [x] Upload the code to a GitHub repository.
- [x] Ensure the repository includes clear instructions on how to run the project and tests.

