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
                retry(3) {
                    git branch: 'main', url: 'https://github.com/akash15072001/chatbotv1'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
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
            script {
                sh "docker rmi ${DOCKER_IMAGE}:${DOCKER_TAG} || true"
            }
        }
            sh "docker rmi ${DOCKER_IMAGE}:${DOCKER_TAG} || true"        }    }
}
