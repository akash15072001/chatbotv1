pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "hub.docker.com/r/akash15072003/chatbot"
        DOCKER_TAG = "latest"
        DOCKER_HUB_CREDENTIALS = "docker-hub-credentials"
    }

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    bat 'git config --global http.sslVerify false'
                }
                retry(3) {
                    checkout scm
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    bat 'npm test'
                }
            }
        }

        stage('Lint Code') {
            steps {
                script {
                    bat 'npm run lint'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    bat "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: "${DOCKER_HUB_CREDENTIALS}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        bat """
                        echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin
                        docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                bat "docker rmi ${DOCKER_IMAGE}:${DOCKER_TAG} || true"
            }
        }
    }
}
