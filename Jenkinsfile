pipeline {
    agent any

    tools {
        nodejs "node17" // or whatever name you set under Manage Jenkins > Tools > NodeJS
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/iftikhar69/ECommerce-Admin-Dashboard-.git'
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

        stage('Archive Build Files') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }

        stage('Deploy (optional)') {
            steps {
                echo 'Deploying the React app...'
                // Example: Copy build to your web server or serve locally
                // sh 'scp -r build/* user@server:/var/www/html/'
            }
        }
    }
}
