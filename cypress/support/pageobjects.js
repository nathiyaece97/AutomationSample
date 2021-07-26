export class PurchaseProduct{

    Login(username, password){
        cy.get('[title="Log in to your customer account"]').click()
        cy.contains("form" , "Already registered?").then(signin =>{
            cy.wrap(signin).find('[id="email"]').type(username)
            cy.wrap(signin).find('[id="passwd"]').type(password)
        })
        cy.get('#SubmitLogin').click()
    }

    AddProductToCart(productName){
        cy.get('[title="T-shirts"]').eq(1).click()
        cy.get("#block_top_menu").find('a[href="http://automationpractice.com/index.php?id_category=3&controller=category"]').eq(0).click()
        cy.get('a[href="http://automationpractice.com/index.php?id_category=4&controller=category"]').eq(1).click()

        cy.contains(productName).parents(".product-container").then(tshirt =>{
            cy.wrap(tshirt).trigger("mouseover")
            cy.wrap(tshirt).get('[title="Add to cart"]').eq(0).click()
        })
    }

    ProceedToCheckout( paymentethod ){
        cy.get("#layer_cart").get('[title="Proceed to checkout"]').click()

        //proceed to checkout - Summary
        cy.get('[class="button btn btn-default standard-checkout button-medium"]').click()

        //Login
       //obj.Login("nathiyaece1997@gmail.com","NkN1997!")
       cy.contains("form" , "Already registered?").then(signin =>{
        cy.wrap(signin).find('[id="email"]').type("nathiyaece1997@gmail.com")
        cy.wrap(signin).find('[id="passwd"]').type("NkN1997!")
    })
    cy.get('#SubmitLogin').click()
        //Proceed to checkout        
        cy.get('[name="processAddress"]').click()

        ///terms and conditions
        cy.get("#uniform-cgv").click()
        cy.get('[name="processCarrier"]').click()

        cy.contains(paymentethod).click()

        //Confirm order
        cy.get('[class="button btn btn-default button-medium"]').click()
       
    }

}

export const obj = new PurchaseProduct()