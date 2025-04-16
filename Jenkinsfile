pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("helloworld-app:${env.BUILD_NUMBER}")
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    bat(script: 'docker stop my-running-container', returnStatus: true)
                    bat(script: 'docker rm my-running-container', returnStatus: true)
                   
                    // Check if port 8090 is in use
                    def portCheck = bat(script: 'netstat -an | findstr 8090', returnStatus: true)
                   
                    if (portCheck == 0) {
                        echo 'Port 8090 is already in use, using fallback port 8091'
                        bat 'docker run -d -p 8091:80 --name my-running-container my-image'
                    } else {
                        echo 'Port 8090 is available'
                        bat 'docker run -d -p 8090:80 --name my-running-container my-image'
                }
            }
        }
    }
    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
