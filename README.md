# 👤 GitHub Profile Analyzer

A responsive web application built with **React** that allows users to search and analyze GitHub profiles. It fetches real-time data using the GitHub API and displays key profile stats, repositories, and more.

## ✨ Features

- 🔍 Search GitHub users by username
- 📊 View public profile information
- 📦 Paginated list of public repositories
- 🕒 Sorted repositories by last updated
- 🚫 Graceful error handling for not found users
- ✅ Responsive design for all screen sizes

## 🛠 Tech Stack

- React
- Fetch API
- CSS
- GitHub REST API


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/github-profile-analyzer.git
```
### 2. Navigate into the project directory
```bash
cd github-profile-analyzer
```
### 3. Install Dependencies
```bash
npm install
```
### 4. Start the development server
```bash
npm run dev
```
### GitHub API Reference
User: https://api.github.com/users/{username}  <br>
Repositories: https://api.github.com/users/{username}/repos?per_page=20&page=1&sort=updated

