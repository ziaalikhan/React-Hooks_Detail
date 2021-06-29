import React from 'react'

function GetImages() {


    const data = [
        {
            allimages: 'images/image1.jpg',
            title: 'zia ali khan 052'
        },
        {
            allimages: 'images/image2.jpg',
            title: 'zia ali khan 052'
        },
        {
            allimages: 'images/image3.jpg',
            title: 'zia ali khan 052'
        },
        {
            allimages: 'images/image4.jpg',
            title: 'zia ali khan 052'
        },
        {
            allimages: 'images/image5.jpg',
            title: 'zia ali khan 052'
        }
    ]


    return (
        <div>
            GetImages

            {
                data.map((val) => {
                    return(
                        <div>
                            <img src={val.allimages} width='200px' alt="" />
                            <p>Title : {val.title}</p>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default GetImages;
