import React from 'react';
import { 
    StyleSheet,
    View,
} from 'react-native';

import Component1 from './Component1';
import Component2 from './Component2';
import Component4 from './Component4';
import Component5 from './Component5';

export default class Screen1 extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            Component1Visible: true,
            Component2Visible: true,
            Component4Visible: true,
            Component5Visible: true,
        }

    }

    toggleComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';
        let val  = this.state[prop];
        if (typeof val === 'undefined') {
            return false;
        }

        this.setState({
            [prop]: val === true ? false : true
        })

        return true;

    }

    hideComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';

        this.setState({
            [prop]: false
        })

        return true;

    }

    showComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';

        this.setState({
            [prop]: true
        })

        return true;

    }

    render() {
        return (

            
            <View style={styles.container}>

                <View style={styles.screencontainer}>

                    <Component1 
                        navigation={this.props.navigation}
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        hideComponent={ (component) => this.hideComponent(component) }
                        showComponent={ (component) => this.showComponent(component) }
                        visible={ this.state.Component1Visible }
                    />
                    <Component2 
                        navigation={this.props.navigation}
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        hideComponent={ (component) => this.hideComponent(component) }
                        showComponent={ (component) => this.showComponent(component) }
                        visible={ this.state.Component2Visible }
                    />
                    <Component4 
                        navigation={this.props.navigation}
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        hideComponent={ (component) => this.hideComponent(component) }
                        showComponent={ (component) => this.showComponent(component) }
                        visible={ this.state.Component4Visible }
                    />
                    <Component5 
                        navigation={this.props.navigation}
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        hideComponent={ (component) => this.hideComponent(component) }
                        showComponent={ (component) => this.showComponent(component) }
                        visible={ this.state.Component5Visible }
                    />

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    
	screencontainer: {
	    backgroundColor: 'rgba(209,18,41,1)',
	    flex: 1,
	},
	
});