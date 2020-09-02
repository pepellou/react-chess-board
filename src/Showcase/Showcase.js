import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const JsxString = (component, counter = 0) => {
    let type = component.type.name;
    let props = component.props;
    let propsString = "";
    for (let key in props) {
        if (key !== "children") {
            let propValue = props[key];
            let value = "";
            if (propValue instanceof Function) {
                value = '{' + propValue.toString().split(' ')[1].split('(')[0] + '}';
            } else if (propValue instanceof Object) {
                const propValueAsString = JSON.stringify(propValue);
                if (propValueAsString !== undefined) {
                    value = `{${propValueAsString.replace(/['"]+/g, '')}}`;
                }
            } else {
                value = `"${propValue}"`;
            }
            propsString += ` ${key}=${value}`;
        }
    }
    if (props.children) {
        counter += 2;
        var children = JsxString(props.children, counter);
        return `<${type}${propsString}>
${Array(counter).join(" ")}  ${children}
${Array(counter).join(" ")}</${type}>`;
    }
    return `<${type}${propsString} />`;
}

function Showcase(props) {
    return (
        <div>
            <SyntaxHighlighter language="jsx" style={dark}>
                {JsxString(props.children)}
            </SyntaxHighlighter>
            {props.children}
        </div>
    );
}

export default Showcase;
