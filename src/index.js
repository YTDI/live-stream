import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

import Timer from './components/timer'
import Menubar from './components/menubar'

import TwitterSection from './sections/twitter'
import GithubSection from './sections/github'

const SectionContainer = styled.div`
    width: 100%;
    padding-top: 64px;
    height: calc(100vh - 64px);
    display: flex;
    z-index: 10;
`

const Containter = styled.div`
    flex: 1;
    color: ${props => (props.github) ? 'white' : 'black'};
    background: ${props => (props.github) ? '#333' : '#fff'};
    overflow-y: scroll;
`

const Padding = styled.div`
    padding: 20px;
`

class App extends React.Component {
    render(){
        return (
            <div>
                <Menubar />
                <Timer end={1502885093}/>
                <SectionContainer>
                    <Containter>
                        <Padding>
                            <TwitterSection />
                        </Padding>
                    </Containter>
                    <Containter github>
                        <Padding>
                            <GithubSection />
                        </Padding>
                    </Containter>
                </SectionContainer>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));