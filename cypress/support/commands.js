// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
 
addMatchImageSnapshotCommand({
  scale: false,
  timeout: 600000,
  disableTimersAndAnimations: true,
  failureThreshold: 2, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
  capture: 'viewport', // capture viewport in screenshot
  timeout: "6000000",

  
}
),
Cypress.Commands.add("form_request", (url, formData) => {
  return cy
    .server()
    .route("POST", url)
    .as("formRequest")
    .window()
    .then(win => {
      var xhr = new win.XMLHttpRequest();
      xhr.open(method, url);
      xhr.send(formData);
    })
    .wait("@formRequest");
});

  