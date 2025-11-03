pipeline {
    agent any

    tools {
        nodejs "node17"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/iftikhar69/ECommerce-Admin-Dashboard-.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci || npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive Build Files') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }

        stage('Deploy (optional)') {
            steps {
                echo 'Deploying the built app...'
                // Example: sh 'cp -r dist/* /var/www/html/'
            }
        }
    }
}
