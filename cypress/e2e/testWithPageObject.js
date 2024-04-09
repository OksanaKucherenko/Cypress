import { onDatePickerPage } from "../support/page_objects/datepickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo, onNavigationPage } from "../support/page_objects/navigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

describe('Test With Page Objects', () => {
    beforeEach('open application', () => {
        cy.openHomePage()

    })
    it('verify navigations actoss the pages', () => {

        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.toasterPage

    })

    it('should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Kaysee555', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test55@test.com', 'qwert')
        navigateTo.datepickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(0)
        onDatePickerPage.selectCommonDatepickerWithRangeFromToday(2, 4)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Oksana', 'Kucherenko')
        onSmartTablePage.deleteRowByIndex(1)
        onSmartTablePage.updateAgeByFirstName('Oksana', '12')



    })

})