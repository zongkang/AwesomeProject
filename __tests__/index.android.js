// import 'react-native';
// import React from 'react';
// import Index from '../index.android.js';
//
// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
//
// it('renders correctly', () => {
//     const tree = renderer.create(
//         <Index />
//     );
// });
// class HelloWorldApp extends Component {
//     render() {
//         return (
//             <Text>Hello world!</Text>
//         );
//     }
// }
//
// // 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
// AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class HelloWorldApp extends Comment {
    render() {
        return (
            <Text>Hello world!</Text>
        );
    }
}

// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);