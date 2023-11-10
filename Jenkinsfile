#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node:latest'
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
                sh 'node --version'
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
