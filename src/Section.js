import React from 'react';
import styled from 'styled-components';

const SectionInner = styled.div`
    height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 20px;
`

const Image = styled.img`
    width: 300px;
    min-width: 300px;
`

const H2 = styled.h2`
    color: #000;
    font-weight: 600;
    text-transform: uppercase
`

const P = styled.p`
    color: #333333;
    font-weight: 300;
`

const Content = styled.div`
    padding: 10px;
`

class Section extends React.Component {
    render() {
        return (
            <SectionInner style={{backgroundColor: this.props.defaultColor}}>
                <Image src={this.props.image} />
                <Content>
                    <H2>{this.props.title}</H2>
                    <P>{this.props.descr}</P>
                </Content>
            </SectionInner>
        );
    }
}

export default Section;