#!/bin/bash

echo "🚀 Setting up Indra's Ironing Website"
echo "======================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Project built successfully"
else
    echo "❌ Failed to build project"
    exit 1
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "Next steps:"
echo "1. Initialize Git repository:"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Initial commit'"
echo ""
echo "2. Create GitHub repository and push:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/indras-ironing.git"
echo "   git push -u origin main"
echo ""
echo "3. Deploy to Vercel:"
echo "   - Go to https://vercel.com"
echo "   - Import your GitHub repository"
echo "   - Deploy automatically"
echo ""
echo "4. For detailed instructions, see DEPLOYMENT.md"
echo ""
echo "To start development server:"
echo "   npm run dev"
echo ""
echo "Happy coding! 🚀"
