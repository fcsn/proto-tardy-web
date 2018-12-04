import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
// import cx from 'classnames';
// import Footer from 'components/common/Footer';


const cx = classNames.bind(styles);

const PageTemplate = ({ children }) => (
    <div className={cx('page-template')}>
        <main>
            {children}
        </main>
    </div>
)

export default PageTemplate;



