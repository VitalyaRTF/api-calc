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
        stage('Docker') {
            steps {
                echo 'Create Docker...'
                sh 'docker run -p 3000:3000 calculator'
            }
        }
    }
}
