import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";

const renderContainer = document.getElementsByTagName('main')[0];

const homePageTemplate = () => html`
        <section id="welcome">
            <div id="welcome-container">
                <h1>Welcome To Meme Lounge</h1>
                <img src="/images/welcome-meme.jpg" alt="meme">
                <h2>Login to see our memes right away!</h2>
                <div id="button-div">
                    <a href="/login" class="button">Login</a>
                    <a href="/register" class="button">Register</a>
                </div>
            </div>
        </section>`;

export const renderHomePage = () => {

    if (sessionStorage.user) {

        page.redirect('/all-memes');

    } else {

        render(homePageTemplate(), renderContainer);

    }

}