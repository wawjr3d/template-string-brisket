"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _brisket = require("brisket");

var TemplateStringAdapter = _brisket.Templating.TemplateAdapter.extend({

    templateToHTML: function templateToHTML(template, data) {
        if (typeof template !== "function") {
            return template;
        }

        return template(data);
    }

});

exports["default"] = TemplateStringAdapter;
module.exports = exports["default"];