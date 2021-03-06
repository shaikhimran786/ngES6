import template from '!html!./view.html';
import {directive, inject} from 'ng-app';
import './style.less';

@directive({selector: 'tool-box'})
class ToolBox {

    constructor() {
        this.replace = true;
        this.template = template;
        this.scope={
            tools:"="
        };
        this.link = this.link.bind(this);
    }

    link(scope,el,attr){
        scope.toolClick=(id,name,supportedAttr)=>{
            scope.$emit('tool-dropped',{id,name,supportedAttr});
        }
    }

    static directiveFactory() {
        return new ToolBox();
    }
}