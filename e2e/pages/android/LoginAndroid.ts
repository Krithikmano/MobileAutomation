import report from '@wdio/allure-reporter'
import { ApplicationConstants } from '../../constants/ApplicationConstants'
import { PageObjectAndroid } from '../../pageObject/PageObjectAndroid'


export class LoginAndroid {
  public async clickGetStartedButton() {
    try {
      const element = await $(
        PageObjectAndroid.LOGIN.GET_STARTED 
      )
      await element.waitForDisplayed(ApplicationConstants.TIME_OUT.HIGH)
      await element.click()
      console.log('Cliked the GetStarted Button')
      report.addStep('Cliked the GetStarted Button')
    } catch (error) {
      console.log('There is no Get Started Button')
      report.addStep('There is no Get Started Button')
    }
  }

  public async enterEmmail(emailAddres:string) {
    try {
      const element = await $(
        PageObjectAndroid.LOGIN.LOGIN_USER_NAME_TEXT_BOX 
      )
      await element.waitForDisplayed(ApplicationConstants.TIME_OUT.SHORT)
      await element.setValue(emailAddres)
      console.log('Entered Email Address')
      report.addStep('Entered Email Address')
    } catch (error) {
      console.log('There is no Email Address Text Box')
      report.addStep('There is no Email Address Text Box')
    }
  }

  public async negativeScenario() {
    expect(true).toEqual(false)
  }

  
}
