import { Templating } from "brisket";

const TemplateStringAdapter = Templating.TemplateAdapter.extend({

    templateToHTML: function(template, data) {
        return template(data);
    }

});

export default TemplateStringAdapter;
