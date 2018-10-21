import React from 'react';
import ReactDOM from 'react-dom';
import Section from './Section';

const data = require('./summary.json');

class App extends React.Component {
    render() {
        return (
            <div>
                {data.map(section =>
                    <Section
                        key={section.id}
                        defaultColor={section.defaultColor}
                        image={section.image}
                        title={section.title}
                        descr={section.descr}
                    />
                )}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));