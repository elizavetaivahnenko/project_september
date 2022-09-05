import React from 'react'
import styles from './../../components/ArticlesRegList/ArticlesRegList.module.sass';
import articles from './articles.json';
import CONSTANTS from '../../constants';

  function ArticlesRegList() {
    return (
      <div className={styles.articlesMainContainer}>
        {articles.map((column, i)=>(
        <div key={i} className={styles.ColumnContainer}>
            {column.map((data, j) => (
          <div key={j}>
          <div className={styles.headerArticle}>{data.head}</div>
          <div className={styles.article}>{data.body}</div>
           </div>
            ))}
            {
            <>
              <div className={styles.headerArticle}>
                I have other questions! How can I get in touch with Squadhelp?
              </div>
              <div className={styles.article}>
                Check out our <span className={styles.orangeSpan}>FAQs</span>or
                send us a <span className={styles.orangeSpan}>message</span>.
                For assistance with launching a contest, you can also call us at{' '}
                {CONSTANTS.CONTACTS.TEL} or schedule a
                <span className={styles.orangeSpan}>
                  {' '}
                  Branding Consultation{' '}
                </span>
              </div>
            </>
          }
          </div>
          ))}
    </div>
    )
  }

export default ArticlesRegList;


