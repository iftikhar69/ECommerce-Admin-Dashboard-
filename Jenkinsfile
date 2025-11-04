pipeline {
    agent any
    
    environment {
        DEPLOY_PATH = '/var/www/html/admin-dashboard'
        NODE_VERSION = '18'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                url: 'https://github.com/iftikhar69/ECommerce-Admin-Dashboard.git'
            }
        }
        
        stage('Setup Node.js') {
            steps {
                sh '''
                    # Install Node.js
                    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
                    sudo apt-get install -y nodejs
                    node --version
                    npm --version
                '''
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Verify Build Output') {
            steps {
                sh '''
                    echo "=== Build Output Structure ==="
                    ls -la dist/
                    echo "=== index.html content ==="
                    cat dist/index.html
                '''
            }
        }
        
        stage('Deploy to Nginx') {
            steps {
                sh """
                    # Stop and clean deployment directory
                    sudo rm -rf ${DEPLOY_PATH}/*
                    
                    # Copy ALL contents from dist folder
                    sudo cp -r dist/* ${DEPLOY_PATH}/
                    
                    # Set proper permissions
                    sudo chown -R www-data:www-data ${DEPLOY_PATH}
                    sudo chmod -R 755 ${DEPLOY_PATH}
                    
                    # Reload Nginx
                    sudo systemctl reload nginx
                    
                    echo "✅ Deployment completed!"
                    echo "📁 Files deployed:"
                    sudo ls -la ${DEPLOY_PATH}/
                """
            }
        }
    }
}
