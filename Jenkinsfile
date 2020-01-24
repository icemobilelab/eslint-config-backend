#!groovy

@Library('jenkins-pipeline-library@master') _

import com.icemobile.jenkins.pipeline.lib.*

pipeline {
  options {
    disableConcurrentBuilds()
    buildDiscarder(logRotator(numToKeepStr:'3'))
    timeout(time: 1, unit: 'HOURS')
    ansiColor('xterm')
  }

  agent {
    label 'nodejs'
  }

  stages {

    stage('Initialize') {
      steps {
        script {
          gitBranch = getBranch()
          gitCommit = getCommit()
          gitTag = getTag()
          projectName = getBaseName()
          projectVersion = setProjectVersionType()
          serviceTag = setTagGlobal(gitBranch, projectVersion)

          if (gitBranch != 'master') {
              // add short commit tag to the image tag
              serviceTag = serviceTag + "-" + gitCommit
          }

          delDCandSECRETS(projectName)

          setGithubStatus(projectName, GIT_COMMIT, BUILD_URL, "Unit Test", true);
          setGithubStatus(projectName, GIT_COMMIT, BUILD_URL, "Version Bump", true);
          setGithubStatus(projectName, GIT_COMMIT, BUILD_URL, "Linting", true);
        }
      }
    }

    stage('Validate Version Bump') {
        steps {
            script {
                if (projectVersion == gitTag) {
                    currentBuild.result = 'FAILURE'
                }

                setGithubStatus(projectName, GIT_COMMIT, BUILD_URL, "Version Bump");
            }
        }
    }

    stage('Create Tag') {
        when {
            expression {
                return gitBranch == 'master'
            }
        }
        steps {
            script {
                setTag(projectVersion, gitCommit)
            }
        }
    }

    stage('Publish To Registry') {
      when {
        expression {
          return gitBranch == 'master'
        }
      }
      steps {
        script {
          publishToNPM();
        }
      }
    }

    stage('Slack Reporting') {
      when {
        expression {
          return gitBranch == 'master'
        }
      }
      steps {
        script {
          slackJenkins(projectVersion, gitCommit, projectName, gitBranch);
        }
      }
    }

  }
}