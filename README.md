# TypeScript Backend Toolkit

A powerful backend toolkit designed for scalability and flexibility. Built with modern technologies and best practices, it's the perfect starting point for your next backend project.

## Features

- 📚 **OpenAPI Docs** - Automatically generated Swagger docs through MagicRouter API and Zod
- 🔒 **Auth Module** - Includes Google Sign-In support for easy authentication
- 📤 **File Upload** - Handles file uploads with Multer and Amazon S3
- ✅ **Data Validation** - Zod for validation and serialization of data
- 📧 **Type-safe Emails** - Emails managed using React Email and Mailgun
- ⚡ **Background Jobs** - Powered by BullMQ with Redis for handling background jobs

## Prerequisites

Before you begin, ensure you have the following installed:

- 📦 Docker + Docker Compose - Required for running Redis and other services
- 📥 PNPM - Fast, disk space efficient package manager
- 🖥️ Node.js 20+ (LTS) - Latest LTS version recommended for best performance

## Quick Start

```bash
# Clone the repository
git clone https://github.com/muneebhashone/typescript-backend-toolkit.git

# Navigate to project directory
cd typescript-backend-toolkit

# Start Docker services
docker compose up -d

# Install dependencies and start development server
pnpm i && pnpm run dev
```

## Roadmap

- 🔄 Socket.io Support with Redis adapter
- 📬 Notification Infrastructure via FCM and Novu
- 🛠️ Ansible Playbook for server configuration
- ☁️ AWS CDK Support for infrastructure
- 📦 Monorepo Support with Turborepo
- λ AWS Lambda Support
- 🌐 Cloudflare Workers Support
- 🗄️ Postgres Support with Drizzle
- 🐳 Containerization with Docker
- ⚓ Kubernetes Support
- 🔄 CI/CD with GitHub Actions
- 🧪 Testing with Jest

## Contributing

Feel free to contribute to this project! Pull requests are welcome.

## License

Licensed under MIT

---

Made with ❤️ for the TypeScript community
