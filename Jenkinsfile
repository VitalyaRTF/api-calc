pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'calc'
  }

    stages {
        stage('Build') {
            steps {
                script {
                sh 'docker build -t calc .'
                    }
                }
            }
	}
}
