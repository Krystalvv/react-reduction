import React from 'react';

import {
    Row,
} from 'reactstrap';

const FModalHeader = ({
    title,
    link,
    ...restProps
}) => {
    return (
        <div style={{ flexDirection: "row", padding: "7px", backgroundColor: "#d7d7d7" }}>
            <Row style={{ margin: "0 20px 0 20px" }}>
                <div style={{ fontWeight: "bold" }}>{title}</div>
            </Row>
        </div>
    );
};

FModalHeader.propTypes = {

};

FModalHeader.defaultProps = {

};

export default FModalHeader;
