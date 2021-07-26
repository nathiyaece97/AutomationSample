//// <reference types = "cypress"/>
import { obj } from "../support/pageobjects"

describe("first test", ()=> {
    it("login", ()=>{
        cy.visit("/")
        obj.Login("nathiyaece1997@gmail.com", "NkN1997!")
        //Verify signin
        cy.get('[class="header-container"]').should("contain", "Sign out")

    })

    it("AddProductToCart", ()=>{
        obj.AddProductToCart("Faded Short Sleeve T-shirts")
    })

    it("Proceedt To Checkout", ()=>{
        obj.ProceedToCheckout("Pay by check")
        //Verification
        cy.get('[class="alert alert-success"]').should("contain","Your order on My Store is complete.")   
    })
       
})