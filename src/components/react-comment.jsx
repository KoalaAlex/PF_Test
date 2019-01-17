import React, { useEffect, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export const ReactComment = React.memo((props) => {
    function  createComment() {
      return `<!-- ${props.textCom} -->`;
    }
    // cDM
    useEffect(() => {
      let el = ReactDOM.findDOMNode(this);
      ReactDOM.unmountComponentAtNode(el);
      el.outerHTML = this.createComment();
    }, [props.textCom]
    );
    return </>;
}

ReactComment.propTypes = {
  textCom: PropTypes.string,
  trim: PropTypes.bool
}

ReactComment.defaultProps = {
  textCom: "",
  trim: false
};
