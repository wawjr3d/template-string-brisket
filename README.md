# template-string-brisket
Brisket TemplateAdapter for using template strings

## Usage

```js
import TemplateStringAdapter from "template-string-brisket";
import { View, Model } from "brisket";

const ExampleView = View.extend({

    templateAdapter: TemplateStringAdapter,

    template: ({ modelHello, hello }) => {
        return `<span>model: ${modelHello}, logic: ${hello}</span>`
    },

    logic() {
        return { "hello": "world" };
    }

});

const model = new Model();
model.set("modelHello", "modelWorld");

const view = new View({ model });
view.render().el.innerHTML // "<span>model: modelWorld, logic: world</span>"
```
