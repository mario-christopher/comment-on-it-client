import React from 'react';
import { CommentOnIt } from 'comment-on-it';
import './style.css';

export class App extends React.PureComponent {

    images = [
        'galaxy.jpeg', 'puppy-buddy.jpeg', 'spider-legs-long.jpeg', 'sunset-beach-traces.jpeg', 'sunset-on-beach.jpeg'
    ];
    index = 0;

    onNextClicked = () => {
        if (this.index < this.images.length - 1)
            this.index++;
        else
            this.index = 0;
        this.forceUpdate();
    }

    onPrevClicked = () => {
        if (this.index > 0)
            this.index--;
        else
            this.index = this.images.length - 1;
        this.forceUpdate();
    }

    render() {
        return (
            <div className='_col body'>

                <div className='header'>A Photo Site for Comments</div>
                <img className='img' src={'/public/img/' + `${this.images[this.index]}`} alt="Chania" />

                <div className='_row'>
                    <button type='button' className='_stretch button' onClick={this.onPrevClicked} title='Prev. Photo'>
                        &lt; Prev
                    </button>
                    <button type='button' className='_stretch button' onClick={this.onNextClicked} title='Next Photo'>
                        Next &gt; 
                    </button>
                </div>

                <CommentOnIt
                    appId='d1f0355d-f7cd-4b4c-ab30-e751c8748a22'
                    instanceId={`${this.images[this.index]}`}
                    header='Any comments ?' />

            </div>
        );
    };
}