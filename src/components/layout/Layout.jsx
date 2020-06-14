import React from 'react';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Footer } from './footer/Footer';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </div>
        );
    };
}

export default Layout;