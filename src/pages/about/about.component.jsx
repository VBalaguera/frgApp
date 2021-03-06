import React from 'react';

import AboutContent from '../../components/about-contents/about-contents.component'; 
import SinglePost from '../../components/single-post/single-post.component'; 

import './about.styles.scss';

class About extends React.Component{
    constructor() {
        super();

        this.state = {
            aboutArticles: [
                {
                  title: 'NOVEDADES',
                  summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in massa tempor, maximus ligula ut, ultrices nibh.',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  category: 'news',
                },
                {
                  title: 'NOVEDADES',
                  summary: 'Nullam faucibus orci leo, quis vestibulum sem consequat eget. Aliquam in blandit odio. Ut accumsan velit ac est convallis fringilla.',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 2,
                  category: 'news',
                },
                {
                  title: 'NOVEDADES',
                  summary: 'Vestibulum mollis facilisis accumsan',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 3,
                  category: 'news',
                },
                {
                  title: 'NOVEDADES',
                  summary: 'Proin sit amet lorem ut lacus tempus scelerisque in id neque. Nam aliquet eleifend ex, vitae tincidunt risus luctus semper.',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 4,
                  category: 'news',
                },
                {
                  title: 'NOVEDADES',
                  summary: 'Pellentesque rutrum porttitor nulla et pulvinar. Donec vel laoreet sem, vel eleifend tellus.',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 5,
                  category: 'news',
                },
                {
                  title: 'NOVEDADES',
                  summary: 'Duis ut sem posuere, aliquam ligula quis, lacinia dolor. Pellentesque sit amet dui sed nisl consectetur aliquam.',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 6,
                  category: 'news',
                },
              ],
        }
    }

    render() {
        return ( 
            <div className='about-container'> 
                
                {
                    this.state.aboutArticles.map(({id, title, category, summary}) => (
                        <AboutContent key={id} title={title} category={category} summary={summary}/>
                    ))
                }
                <SinglePost></SinglePost>
            </div> 
        )
    }
}

export default About; 

