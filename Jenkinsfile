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
                sh 'mkdir -p reports'
                def trivyResult = sh(script: 'trivy image —ignore-unfixed —exit-code 1 —format template —template "@contrib/html.tpl" -o reports/calc-scan.html node', returnStatus: true)
                publishHTML target : [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'reports',
                reportFiles: 'calc-scan.html',
                reportName: 'Trivy Scan',
                reportTitles: 'Trivy Scan'
                ]
                if (trivyResult == 0) {
                echo "Уязвимости высокой или критичесной строгости не найдены."}
                else {
                error "Найдены уязвимости высокой или критичесной строгости."
                }
                }
                }
                }
    }
}
