/// <reference types='cypress' />

import Base_PO from './00.base_PO';

let i = 1;

class NavBar_Right_PO extends Base_PO {
  elements = {
    createSet_link: () => cy.get('#rightSidebar').find('#createNewSet'),
    savedSet_link: (i) => cy.get('#rightSidebar').find('#savedSets>li').eq(i)
  };

  shouldContain(item) {
    switch (item) {
      case 'Create a New Set':
        cy.get(this.elements.createSet_link());
        break;
      case 'My Set 1':
        cy.get(this.elements.savedSet_link_1());
        break;
        default:
          cy.log('Unknown set');
    }
  }
  createSet() {
    this.elements.createSet_link().click();
  }
  openSavedSet(index) {
    i = index - 1;
    this.elements.savedSet_link(i).click();
  }
}

export default NavBar_Right_PO;
