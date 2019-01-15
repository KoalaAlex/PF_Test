import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export class ReactComment extends React.Component {

    componentDidMount() {
        let el = ReactDOM.findDOMNode(this);
        ReactDOM.unmountComponentAtNode(el);
        el.outerHTML = this.createComment();
    }

    createComment() {
        return `<!-- ${this.props.textCom} -->`;
    }

    render() {
        return <React.Fragment />;
    }
}

ReactComment.propTypes = {
  textCom: PropTypes.string,
  trim: PropTypes.bool
}

ReactComment.defaultProps = {
  textCom: "",
  trim: false
};
