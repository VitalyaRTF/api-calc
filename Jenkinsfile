pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                sh 'docker build -t calc .'
                    }
                }
            }
 stage('Scanning') {
            steps {
                script {
                sh 'mkdir -p reports'
                    def trivyResult = sh(script: 'trivy image --ignore-unfixed --exit-code 1 --format template --template "@contrib/html.tpl" -o reports/calc-scan.html calc', returnStatus: true)
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
	stage('Deploy Container') {
            steps {
                script {
                sh 'docker stop calculator || true'
		sh 'docker rm calculator || true'
                sh 'docker run -d -p 3000:3000 --name calculator calc'
                }
            }
        }
	stage('Test Calculator') {
            steps {
		sh 'curl localhost:3000/add/1/1'}
		}
	}
}
	
