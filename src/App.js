import React, { Component } from 'react';
import './App.css';
import books from './books.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import BookCard from './components/BookCard'


class App extends Component {
    state = {
        message: "",
        topScore: 0,
        curScore: 0,
        books: books,
        unselectedBooks: books
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectBook = cover => {
        const findBook = this.state.unselectedBooks.find(item => item.cover === cover);

        if(findBook === undefined) {
            //Picked an already selected book 
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                books: books,
                unselectedBooks: books
            });
        }
        else {
            //Picked an unselected book
            const newBooks = this.state.unselectedBooks.filter(item => item.cover !== cover);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                books: books,
                unselectedBooks: newBooks
            });
        }

        this.shuffleArray(books);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.books.map(book => (
                        <BookCard
                            cover={book.cover}
                            image={book.image}
                            selectBook={this.selectBook} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;

