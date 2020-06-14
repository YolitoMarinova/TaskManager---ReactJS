import React from 'react';

const styles = {
    backgroundColor: 'yellow',
    height: '50px',
    width: '100%',
    position: 'fixed',
    bottom: '0',

};

export function Footer() {
    return (
        <div className="footer" style={styles}>
            This is Footer!
        </div>
    );
}