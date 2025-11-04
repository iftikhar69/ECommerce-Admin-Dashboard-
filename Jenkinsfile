pipeline {
    agent any
    
    environment {
        DEPLOY_PATH = '/var/www/html/admin-dashboard'
        NODE_VERSION = '18'  // Use appropriate Node.js version
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                url: 'https://github.com/iftikhar69/ECommerce-Admin-Dashboard.git'
                // If private repo, use credentials:
                // git branch: 'main', 
                // url: 'https://github.com/iftikhar69/ECommerce-Admin-Dashboard.git',
                // credentialsId: 'github-credentials'
            }
        }
        
        stage('Setup Node.js') {
            steps {
                script {
                    // Install Node.js if using Jenkins agent
                    sh '''
                        curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
                        sudo apt-get install -y nodejs
                        node --version
                        npm --version
                    '''
                }
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
        
        stage('Run Tests') {
            steps {
                sh 'npm test -- --watchAll=false --coverage --passWithNoTests'
            }
        }
        
        stage('Deploy to Nginx') {
            steps {
                sh """
                    # Create deployment directory if it doesn't exist
                    sudo mkdir -p ${DEPLOY_PATH}
                    
                    # Copy build files to Nginx directory
                    sudo cp -r dist/* ${DEPLOY_PATH}/
                    
                    # Set proper permissions
                    sudo chown -R www-data:www-data ${DEPLOY_PATH}
                    sudo chmod -R 755 ${DEPLOY_PATH}
                    
                    # Reload Nginx to serve updated content
                    sudo systemctl reload nginx
                    
                    echo "✅ React Admin Dashboard deployed successfully!"
                """
            }
        }
    }
    
    post {
        success {
            echo '🎉 Build and deployment completed successfully!'
            // You can add notifications here (email, Slack, etc.)
        }
        failure {
            echo '❌ Build or deployment failed!'
        }
    }
}
