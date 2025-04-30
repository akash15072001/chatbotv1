pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "akash15072003/chatbot"
        DOCKER_TAG = "latest"
        DOCKER_HUB_CREDENTIALS = "docker-hub-credentials" // Add this credential in Jenkins
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Clone the GitHub repository
                git branch: 'main', url: 'https://github.com/akash15072001'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build the Docker image
                script {
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                // Log in to Docker Hub and push the image
                script {
                    withCredentials([usernamePassword(credentialsId: "${DOCKER_HUB_CREDENTIALS}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh "echo ${DOCKER_PASS} | docker login -u ${DOCKER_USER} --password-stdin"
                        sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    }
                }
            }
        }
    }

    post {
        always {
            // Clean up Docker images after the build
            sh "docker rmi ${DOCKER_IMAGE}:${DOCKER_TAG} || true"
        }
    }
}
