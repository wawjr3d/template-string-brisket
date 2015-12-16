import { Templating } from "brisket";

const TemplateStringAdapter = Templating.TemplateAdapter.extend({

    templateToHTML: function(template, data) {
        if (typeof template !== "function") {
            return template;
        }

        return template(data);
    }

});

export default TemplateStringAdapter;
