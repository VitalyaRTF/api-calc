#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
    stage('Scanning') {
            steps {
                script {
                sh 'trivy image node'
                }
                }
                }
    }
}
