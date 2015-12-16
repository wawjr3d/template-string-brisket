import TemplateStringAdapter from "../lib/TemplateStringAdapter";
import { View, Testing, Model } from "brisket";

import { expect } from "chai";

describe("TemplateStringAdapter", function() {
    var view;
    var ExampleView;
    var model;

    beforeEach(function() {
        Testing.setup();
    });

    it("renders template string directly", function() {
        const SOME_LOCAL_CONSTANT = "slc";

        ExampleView = View.extend({

            templateAdapter: TemplateStringAdapter,

            template: `<span class='test'>${SOME_LOCAL_CONSTANT}</span>`

        });

        view = new ExampleView();

        view.render();

        expect(view.el.innerHTML)
            .to.equal('<span class="test">slc</span>');
    });

    it("renders template string function as a string", function() {
        ExampleView = View.extend({

            templateAdapter: TemplateStringAdapter,

            template: (data) => {
                return `<span class="test">I should be rendered</span>`
            }

        });

        view = new ExampleView();

        view.render();

        expect(view.el.innerHTML)
            .to.equal('<span class="test">I should be rendered</span>');
    });

    it("passes view data to template string function as a string", function() {
        ExampleView = View.extend({

            templateAdapter: TemplateStringAdapter,

            logic() {
                return { "logicKey": "logic-value" };
            },

            template: ({ modelKey, logicKey }) => {
                return `<span class="test">model: ${modelKey}, logic: ${logicKey}</span>`
            }

        });

        model = new Model();
        model.set("modelKey", "model-value");

        view = new ExampleView({ model });

        view.render();

        expect(view.el.innerHTML)
            .to.equal('<span class="test">model: model-value, logic: logic-value</span>');
    });

});
