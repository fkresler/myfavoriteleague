import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class NotFoundContent extends Component {
    render() {
        return (
            <div>
                This is the content if there was no page found for your URL!
            </div>
        );
    }
}

export default NotFoundContent;
