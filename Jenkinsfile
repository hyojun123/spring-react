pipeline {
    agent any
    tools {nodejs "NODEJS"}
    stages {
        stage('chmod') {
            steps {
                sh 'chmod +x mvnw'
            }
        }
        stage('Deployment') {
            parallel {
                stage('Dev') {
                    when {
                        anyOf {branch 'develop'}
                    }
                    steps {
                        sh './mvnw clean install jib:build -Djib.to.tags=dev.v$BUILD_NUMBER'
                    }
                }
                stage('Production') {
                    when {
                        anyOf {branch 'master'}
                    }
                    steps {
                        sh 'cd frontend2/'
                        sh 'npm install'
                        sh 'npm run build'
                        sh 'cd ..'
                        sh './mvnw clean install jib:build -Djib.to.tags=prod.v$BUILD_NUMBER'
                        sh 'sudo helm upgrade spring-react /home/hjchoi/kuber/spring-react/ --set image.tag="prod.v$BUILD_NUMBER"'
                    }
                }
            }
        }
    }
}