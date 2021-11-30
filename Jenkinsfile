pipeline {
    agent any
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
                        sh './mvnw clean install jib:build -Djib.to.tags=prod.v$BUILD_NUMBER'
                    }
                }
            }
        }
    }
}