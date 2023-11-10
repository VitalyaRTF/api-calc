#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'calc'
            args '-u root'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
            }
        }
        stage('docker start') {
            steps {
                echo 'Starting...'
            }
        }
	   stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
        }
    }
}
