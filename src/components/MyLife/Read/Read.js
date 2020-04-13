import React from 'react';

import Book from './Book';
import OtherPage from '../../../hoc/OtherPage';
import classes from './Read.module.css'

import Zarathustra from '../../../asset/thus-spoke-zarathustra-nietzsche-book_800x.jpg';
import DecisiveMoments from '../../../asset/decisive-moments.jpg';
import Store from '../../../asset/store.jpg';
import Prince from '../../../asset/prince.jpg';
import Journey from '../../../asset/Journey Under the Midnight Sun.jpg';
import Moon from '../../../asset/the-moon-and-sixpence-2.jpg';
import Razor from '../../../asset/razor.jpg';
import Hills from '../../../asset/hills.jpg';

const books = [
    {
        name: 'Thus Spake Zarathustra',
        url: Zarathustra,
        content: 'I always think Nietzsche is more like a poet than a philosopher and this book proves it.'
    },
    {
        name: 'Decisive Moments in History',
        url: DecisiveMoments,
        content: `One of my fovarite books when I grow up. Every time I read it, every time I'm shocked by history giants.`
    },
    {
        name: 'Miracles of the Namiya General Store',
        url: Store,
        content: 'This is a lovely book. It heals me several times when I was frustrated.'
    },
    {
        name: 'The Little Prince',
        url: Prince,
        content: `It's a book for growned man.`
    },
    {
        name: 'Journey Under the Midnight Sun',
        url: Journey,
        content: 'The readers know who is the murderer at the first chapter, but can only know how the murder happened at the very last chapter.'
    },
    {
        name: 'The Moon And Sixpence',
        url: Moon,
        content: 'The book tells a story about Paul Gauguin\'s legendary life.'
    },
    {
        name: 'The Razor\'s Edge',
        url: Razor,
        content: 'This book purified my spirit again.'
    },
    {
        name: 'A Pale View of Hills',
        url: Hills,
        content: 'You can only understand the whole story at the very last few paragraph of the book.'
    }
]

const Read = (props) => (
    <OtherPage title="Read" qoute="A reader lives a thousand lives before he dies. -- George R.R. Martin" backgroundStyle='life-dark'>
        <div className={classes.Note}>Here are some of my recent readings:</div>
        <div className={classes.Books}>
            {books.map((book) => <Book key={book.name} bookName={book.name} bookImgUrl={book.url} content={book.content} />)}
        </div>
    </OtherPage>
);


export default Read;