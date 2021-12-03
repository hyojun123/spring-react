pipeline {
    agent any
    tools {nodejs "nodejs-14.17.3"}
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
                        sh ''
                        sh 'cd frontend2/ && npm install'
                        sh 'cd frontend2/ && pwd &&CI=false npm run build'
                        sh './mvnw clean install jib:build -Djib.to.tags=prod.v$BUILD_NUMBER'
                        sh 'sudo helm upgrade spring-react /home/hjchoi/kuber/spring-react/ --set image.tag="prod.v$BUILD_NUMBER"'
                    }
                }
            }
        }
    }
}