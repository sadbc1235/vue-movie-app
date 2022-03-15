/*
  * 검색(메인) 페이지로 접근 후,
  * 영화 제목을 'frozen'으로, 표시 개수를 30개로 입력하고,
  * 'Apply' 버튼을 클릭해 영화 목록을 검색합니다.
  * 영화 목록 30개가 잘 출력됩니다.
  * 영화 목록에서 'Frozen II'(겨울왕국2) 영화 아이템을 클릭하면,
  * 영화 상세 정보 페이지로 이동합니다.
  * 상세 정보 페이지에서 정보를 확인할 수 있습니다.
*/
describe('About 페이지로 이동', () => {
  it('메인 페이지로 접근합니다.', () => {
    cy.visit('/')
    cy.get('header .nav-link.active')
      .contains('Search')
  })
  it('About 페이지로 이동합니다.', () => {
    cy.get('header .nav-link')
      .contains('About')
      .click()
    cy.url()  // http://localhost:8080/
      .should('include', '/about')
    cy.wait(1000)
    cy.get('header .nav-link.active')
      .contains('About')
    cy.get('.name')
      .contains('KES')
  })
  it('영화의 상세페이지로 이동합니다.', () => {
    cy.get('header .nav-link')
      .contains('Movie')
      .click()
    cy.url()  // http://localhost:8080/
      .should('include', '/movie/tt4520988')
  })
  it('About 아이콘을 클릭합니다.', () => {
    cy.get('header .user')
      .click()
    cy.url()  // http://localhost:8080/
      .should('include', '/about')
    cy.wait(1000)
    cy.get('header .nav-link.active')
      .contains('About')
    cy.get('.name')
      .contains('KES')
  })
})