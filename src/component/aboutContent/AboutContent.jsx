/** @jsxRuntime classic */
/** @jsx jsx */
// import React from "react";
import { jsx } from '@emotion/react'
import {Link} from "react-router-dom";
import Container from '../../layout/Container';
import Item from '../../layout/Item';

import * as styles from './AboutContent.styles'

const AboutContent = () => {
    return(
        <section className="about-content-component">
            <Container flexDirection="column">
                <Item align="center" >
                    <h1 css={styles.aboutPageHeader}>About Page</h1>
                    <h3 css={styles.aboutSubPageHeader}>
                        What I Learn By Building App
                    </h3>
                </Item>

                <Item>
                    <p css={styles.aboutPageParagraph}>Ini Adalah tutorial tentang react dari wegodev dan mudah dimengerti dijelaskan cara
                        pembuatan dengan berbagai cara sehingga mengerti objek, array, state, props, style, emotion css, class component
                        dan juga menggunakan const, router, dll.  Harus lebih dipahami lagi tentang javascript dan tutorial ini karena benar-benar
                        sangat kerennn..
                    </p>
                </Item>

                <Item align="center"> 
                    <Link to="/">
                        <span css={styles.backToHome}>Kembali Ke Home</span>
                    </Link>
                </Item>
            </Container>
        </section>
    )
}

export default AboutContent;