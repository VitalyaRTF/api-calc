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
                sh 'docker build -t calc .'
		sh 'npm install -g pm2'
            }
        }
        stage('docker start') {
            steps {
                echo 'Starting...'
                sh 'docker run -d -p 3000:3000 calc'
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
