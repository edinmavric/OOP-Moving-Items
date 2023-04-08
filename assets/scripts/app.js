import { ProjectList } from './App/ProjectList.js'

class App {
  static init() {
    const activeProjectsList = new ProjectList('active')
    const finishedProjectsList = new ProjectList('finished')
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    )
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    )

    // document
    // .getElementById("start-analytics-btn")
    // .addEventListener("click", this.startAnalytics);
    // setTimeout(this.startAnalytics, 3000);
  }

  // const someScript = document.createElement("script");
  // someScript.textContent = "alert('Hi There!')";
  // document.head.append(someScript);
  static startAnalytics() {
    const analyticsScript = document.createElement('script')
    analyticsScript.src = 'assets/scripts/Utility/Analytics.js'
    analyticsScript.defer = true
    document.head.append(analyticsScript)
  }
}

App.init()
