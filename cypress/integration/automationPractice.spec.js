//// <reference types = "cypress"/>
import {username , password, paymentMethod, productname } from "../fixtures/inputdata.json"

describe("first test", ()=> {
    it("Sign", function(){
        cy.visit("/")
        cy.login(username,password)
        cy.get('[class="header-container"]').should("contain", "Sign out") //verify Sign in

    })     

    it("AddProductToCart", ()=>{
        cy.AddToCart(productname)
    })

    it("Proceedt To Checkout", ()=>{
        cy.ProceedToCheckout(paymentMethod)
        cy.get('[class="alert alert-success"]').should("contain","Your order on My Store is complete.")  //Verification
    })
       
})