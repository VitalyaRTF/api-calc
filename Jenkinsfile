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
	stage('Deploy Container') {
            steps {
                script {
                // Запуск контейнера
                sh "docker run -d -p 3000:3000 --name calculator calc"
                }
            }
        }
	stage('Test Calculator') {
            steps {
		sh 'curl localhost:3000/add/1/1'}
		}
	}
}
	
