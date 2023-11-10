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
		sh 'npm install -g pm2'
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
		sh 'pm2 start index.js'
                sh 'npm test'
		sh 'pm2 stop index.js'
            }
        }
    }
}
