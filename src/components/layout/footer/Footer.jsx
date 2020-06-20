import React from 'react';

const styles = {
    backgroundColor: 'yellow',
    position: 'absolute',
    height: '50px',
    width: '100%'
};

export function Footer() {
    return (
        <div className="footer" style={styles} id="footer">
            This is Footer!
        </div>
    );
}